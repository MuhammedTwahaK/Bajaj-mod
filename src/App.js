import './App.css';
import "./Home.css";
import "./HomeSecond.css";
import "./HomeThree.css";
import "./HomeFour.css";
import "./HomeFive.css";
import "./HomeSix.css";
import "./HomeSeven.css";
import "./HomeEight.css";
import "./HomeNine.css";
import "./HomeTen.css";
import "./HomeEleven.css";
import "./OfferForYou.css";
import "./Footer.css";
import "./Personal.css";
import "./SignIN.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home';
import Personal from './Component/Personal/Personal';
import SignIN from './Component/SIGNin/SignIN';


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<NavBar/>}>
<Route index element ={<Home/>}/>
<Route path='Personal' element ={<Personal/>}/>
<Route path='SignIN' element={<SignIN/>}/>

</Route>

</Routes>
</BrowserRouter>


  );
}

export default App;
