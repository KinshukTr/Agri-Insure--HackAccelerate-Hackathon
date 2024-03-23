// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CropInsurance {
    address public owner;
    uint public totalFunds;
    mapping(address => uint) public premiumsPaid;

    // Event to log premium payments
    event PremiumPaid(address indexed farmer, uint amount);

    // Event to log returns from investments
    event InvestmentReturns(uint amount);

    constructor() {
        owner = msg.sender;
    }

    // Function for farmers to pay premiums
    function payPremium() external payable {
        premiumsPaid[msg.sender] += msg.value;
        totalFunds += msg.value;
        emit PremiumPaid(msg.sender, msg.value);
    }

    // Function to invest funds in low-risk investment plans
    function investFunds(uint _amount) external onlyOwner {
        require(_amount <= address(this).balance, "Insufficient funds available");
        // Perform investment logic here...
        // For demonstration purposes, we emit an event with the returns obtained
        uint investment_returns = _amount / 100;    // Placeholder: assuming 1% returns
        totalFunds += investment_returns; // Add returns to the funds pool
        emit InvestmentReturns(investment_returns);
    }


    // where private investors and govt provides initial fund 
    mapping(address => uint) public initalpool; //includes investors and govt. funds
    event Investors(address indexed investor, uint amount);
    
    function Investorpay() external payable {
        initalpool[msg.sender] += msg.value;
        totalFunds += msg.value;
        emit Investors(msg.sender, msg.value);
    }

      // Modifier to ensure only the contract owner can call certain functions
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }



}