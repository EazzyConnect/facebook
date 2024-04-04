import React, { useState } from 'react';
import Input from './Input';
import loginCSS from './Login.module.css';



const Login = () => {

 const [showForm, setShowForm] = useState(false);

 const displayForm = () => {
  setShowForm(!showForm)
 }
 const loginBtn = (e) => {
  e.preventDefault();
  console.log(`Logged In...`);
 }

 return (
  <>
   <div id={loginCSS.loginContainer}>

    <div id={loginCSS.loginContainer1}>
     <h1 id={loginCSS.facebook}>facebook</h1>
     <h5 id={loginCSS.facebookText}>Facebook helps you connect and share with the people in your life.</h5>
    </div>

    <div id={loginCSS.loginContainer2}>

     <div id={loginCSS.loginContainer2top}>

      <form action="" onSubmit={loginBtn} method='POST'>
       <Input type={"email"} placeholder={"Enter Email"} />
       <Input type={"password"} placeholder={"Enter Password"} />
       <button id={loginCSS.btn1} type="submit">Log in</button>
      </form>

      <div id={loginCSS.loginContainer2bottom}>
       <button id={loginCSS.btn2}>Forgotten password?</button>
       <hr />
       <button id={loginCSS.btn3} onClick={displayForm}>Create new account</button>
      </div>

     </div>

     <div id={loginCSS.loginContainerLast}>
      <p><span>Create a page</span> for a celebrity, brand or business</p>
     </div>

    </div>

   </div>

   {
    showForm && (
     <div id={loginCSS.displayForm}>

      <div id={loginCSS.displayFormInner}>

       <div id={loginCSS.displayFormInner1}>
        <div>
         <h1>Sign Up</h1>
         <p>It's quick and easy.</p>
        </div>
        <button id={loginCSS.cancelBtn} onClick={displayForm}><i class="fa-solid fa-xmark"></i></button>
       </div>

       <hr />

       <form action="" onSubmit={loginBtn} method='POST'>

        <div id={loginCSS.displayFormInner2}>
         <Input type={"text"} placeholder={"First name"} />
         <Input type={"text"} placeholder={"Surname"} />
        </div>

        <div className={loginCSS.displayFormInput}>
         <Input type={"text"} placeholder={"Mobile number or email address"} />
        </div>

        <div className={loginCSS.displayFormInput}>
         <Input type={"password"} placeholder={"New password"} />
        </div>

        <p className={loginCSS.pTag}>Date of birth <i className="fa-solid fa-circle-question"></i></p>

        <div id={loginCSS.displayFormInner3}>

         <div className={loginCSS.selectDOB}>
          <select name="" id="days">
           <option value="">30</option>
          </select>
         </div>

         <div className={loginCSS.selectDOB}>
          <select name="" id="month">
           <option value="">Mar</option>
          </select>
         </div>

         <div className={loginCSS.selectDOB}>
          <select name="" id="year">
           <option value="">2024</option>
          </select>

         </div>

        </div>

        <p className={loginCSS.pTag}>Gender <i className="fa-solid fa-circle-question"></i></p>

        <div id={loginCSS.displayFormInner4}>

         <div className={loginCSS.genderRadio}>
          <label className={loginCSS.genderLabel} htmlFor="male">Female</label>
          <input style={{ height: "20px" }} type="radio" name="gender" id="male" />
         </div>

         <div className={loginCSS.genderRadio}>
          <label className={loginCSS.genderLabel} htmlFor="female">Male</label>
          <input style={{ height: "20px" }} type="radio" name="gender" id="female" />
         </div>

         <div className={loginCSS.genderRadio}>
          <label className={loginCSS.genderLabel} htmlFor="other">Custom</label>
          <input style={{ height: "20px" }} type="radio" name="gender" id="other" />
         </div>
        </div>

        <p className={loginCSS.pTagBottom}>People who use our service may have uploaded your contact information to Facebook. <span className={loginCSS.pSpan}>Learn more</span> .</p>

        <p className={loginCSS.pTagBottom}>By clicking Sign Up, you agree to our <span className={loginCSS.pSpan}>Terms, Privacy Policy and Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.</p>

        <div id={loginCSS.btn4Div}>
         <button id={loginCSS.btn4} type="submit">Sign Up</button>
        </div>
       </form>

      </div>

     </div>
    )
   }


  </>
 )
};

export default Login;
