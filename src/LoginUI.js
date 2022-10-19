import './LoginUI.css';
import profile from "./image/a.png";
import pass from "./image/pass.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div className='perinfo'>
         <h5>Personal Account</h5>
           <h3>Andrew@polka.io</h3>
           <h6 className='password'>Password</h6>
           <div className="second-input">
           <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
             
           </div>
           <p className="link">
              <a href="#">Forgot password ?</a><a href="#" className='reset'> Reset</a>
            </p>
          <div className="login-button">
          <div className='signin'>
          <div className='boxin'><input type="checkbox" className="box" checked/><p> Stay signed in</p></div>
          <button>Sign in</button>
          </div>
          <div ><hr></hr>
          <p className='bottom'>This site is protected by reCAPTCHA and the Google <span >Privacy Policy</span> and <span className='span'>Terms of Service</span>
           apply.</p></div>
         
       </div>
          
          </div>
           
            
           
 
         </div>
       </div>
       

     </div>
    
  );
}

export default LoginUi;