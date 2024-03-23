// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.6/vendor/SafeMathChainlink.sol";

contract CropInsurance {

    mapping(address => uint256) public addresstoamountfunded;
    function fund() public payable {
        addresstoamountfunded[msg.sender] += msg.value;
    }
    
    address public owner; // Owner of the contract
    mapping(address => uint256) public pendingClaims; // Pending claims of farmers
    mapping(address => bool) public isClaimValidated; // Status of claim validation
    mapping(address => uint256) public compensationAmount; // Compensation amounts for validated claims

    event ClaimSubmitted(address farmer, uint256 claimAmount);
    event ClaimValidated(address farmer, uint256 compensation);

    constructor() public {
        owner = msg.sender; // Set contract deployer as owner
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    // Function for farmers to submit claims
    function submitClaim( uint256 _claimAmount) external {
        require(_claimAmount > 0, "Claim amount must be greater than zero");
        pendingClaims[msg.sender] = _claimAmount;
        emit ClaimSubmitted(msg.sender, _claimAmount);
    }

    // Function for contract owner to validate claims
function validateClaim(address _farmer, uint256 _percentageOfLoss) external onlyOwner {
    require(pendingClaims[_farmer] > 0, "No pending claim for this farmer");

    // Calculate compensation amount based on the percentage of loss and maximum compensation amount for weather
    uint256 calculatedCompensationAmount = (_percentageOfLoss * pendingClaims[_farmer]) / 100;

    // Mark the claim as validated and set the compensation amount
    isClaimValidated[_farmer] = true;
    compensationAmount[_farmer] = calculatedCompensationAmount;

    // Emit an event to notify the compensation amount
    emit ClaimValidated(_farmer, calculatedCompensationAmount);
}

    
    // Mapping to store claimed amounts for each address
    //mapping(address => uint256) public claimedAmounts;


   // Function for farmers to withdraw their compensation
 
    // Event to log compensation withdrawals
    event CompensationWithdrawn(address indexed farmer, uint256 amount);

    // Function for farmers to withdraw their compensation
    function withdrawCompensation() external payable {
        require(isClaimValidated[msg.sender], "Claim not yet validated");
        require(compensationAmount[msg.sender] > 0, "No compensation available");

        uint256 amount = compensationAmount[msg.sender];
        compensationAmount[msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit CompensationWithdrawn(msg.sender, amount);
    }

    // Function to get the amount withdrawn as compensation by a farmer
    function getWithdrawnCompensationAmount(address farmer) external view returns (uint256) {
        return compensationAmount[farmer];
    }


    // to display amount transferred to farmers
    

    // Fallback function to receive ether
    //receive() external payable {}

}