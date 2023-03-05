import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/main-page/main-page';
import { LogIn } from './components/log-in/log-in';
import { SignUp } from './components/sign-up/sign-up';
import { Tasks } from "./components/tasks";
import Ring1 from "./rings/ring1";
import Ring2 from "./rings/ring2";
import Ring3 from "./rings/ring3";
import Ring4 from "./rings/ring4";
import Ring5 from "./rings/ring5";
import Ring6 from "./rings/ring6";
import Ring7 from "./rings/ring7";
import Ring8 from "./rings/ring8";
import Ring9 from "./rings/ring9";
import Ring10 from "./rings/ring10";
import Ring11 from "./rings/ring11";
import StarAnimation from "./sky/star";
import './index.css';

//fonts
import "./fonts/ComfortaaBold.ttf";

function App() {
  return (
    <Router>
      <div className="sketch">
        <Ring1 speed={0.3} sz1={450} sz2={450} xcoor={400} ycoor={400}/>
        <Ring2 speed={0.2} sz1={500} sz2={500} xcoor={400} ycoor={400}/>
        <Ring3 speed={0.1} sz1={550} sz2={550} xcoor={400} ycoor={400}/>
        <Ring4 speed={0.2} sz1={700} sz2={700} xcoor={700} ycoor={700}/>
        <Ring5 speed={0.3} sz1={750} sz2={750} xcoor={750} ycoor={750}/>
        <Ring6 speed={0.2} sz1={900} sz2={900} xcoor={900} ycoor={900}/>
        <Ring7 speed={0.1} sz1={950} sz2={950} xcoor={950} ycoor={950}/>
        <Ring8 speed={0.2} sz1={1100} sz2={1100} xcoor={1100} ycoor={1100}/>
        <Ring9 speed={0.2} sz1={1300} sz2={1300} xcoor={1300} ycoor={1300}/>
        <Ring10 speed={0.3} sz1={1350} sz2={1350} xcoor={1350} ycoor={1350}/>
        <Ring11 speed={0.1} sz1={1450} sz2={1450} xcoor={1450} ycoor={1450}/>
        <StarAnimation />
        <div className="star1"></div>
        <div className="star2"></div>
        <div className="star3"></div>
        <div className="star4"></div>
        <div className="star5"></div>
        <div className="star6"></div>
        <div className="star7"></div>
        <div className="star8"></div>
        <div className="star9"></div>
        <div className="star10"></div>
        <div className="star11"></div>
        <div className="star12"></div>
        <div className="star13"></div>
        <div className="star14"></div>
        <div className="star15"></div>
        <div className="star16"></div>
        <div className="star17"></div>
      </div>
      <div className="main">
        <div className="main-container">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;