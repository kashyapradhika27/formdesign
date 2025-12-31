import Home from "./Home.js"
import './App.css';
import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import { Loginform } from "./Loginform.js";
import { Signupform } from "./Signupform.js";

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/loginform" element={ <Loginform/>} />
          <Route path="/Signupform" element={< Signupform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
