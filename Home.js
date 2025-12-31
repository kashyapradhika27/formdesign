
import { useNavigate } from "react-router-dom";
import './App.css'
const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='login'>
      <h2>Welcome To Popx</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="btngroup">
      <button className="btn" type='button' onClick={() => navigate('/signupform')}>Create Account</button>
        <button className="btn" type='button' onClick={() => navigate('/loginform')}>Already Registered? Login</button>
      </div>
    </div>
  )
}

export default Home