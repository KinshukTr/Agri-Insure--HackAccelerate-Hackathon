import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './HomePage.js';
import Login from './Login.js';
import Sign from './Sign.js';

const App = () =>
 {
return (
    <>
<BrowserRouter>
<Routes>
<Route  exact path="/" element ={<HomePage/>}></Route>
<Route exact path="/login" element ={<Login/>}></Route>
<Route exact path="/signup" element ={<Sign/>}></Route>


</Routes>
</BrowserRouter>

</>
); 
}
export default App;