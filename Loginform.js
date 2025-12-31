
import './App.css'
import { useNavigate } from 'react-router-dom'
export const Loginform = () => {
    const navigate = useNavigate();
    return (
        <div className='loginform'>
            <div>
                <h2>Create your Popx account</h2>

            </div>
            <form className='loginforms'>
                <div>
               
                    <input type='text' name='fullname' placeholder=" " required />
                    <label>Full Name</label>
                </div>
                <div><input type='number' name='number' placeholder=" " required />
                    <label>Phone Number</label>
                </div>
                <div>
                    <input type='text' name='address' placeholder=" " required />
                    <label> Email address </label>
                </div>
                <div> <input type='text' name='company' placeholder=" " required />
                    <label>Company Name </label>
                </div>
                
               <div>
                    <input type='password' name='password' placeholder=" " required />
                    <label>Password</label>
               </div>
                
                
               
               
                <p>Are you an Agency?</p>
                <div className="radiogroup">
                    <label><input type="radio" name="agency" value="yes" /> Yes</label>
                    <label><input type="radio" name="agency" value="no" /> No</label>
                </div>
                <div>
                    <button type='button' onClick={() => navigate('/signupform')}>Create a account</button>
                </div>




            </form>
        </div>
    )
}
