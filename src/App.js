import react from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [pass,setPass]=useState('a');
  const [confirm_pass,setConfirm_pass]=useState('b');

  function Sign_up(){
     if(pass===confirm_pass)
       {
        window.alert("Form submitted successfully")
       }
     else
     {
        window.alert("Form Cannot be submitted")
     }

  }

  return (
    <div id="containeer">
        <div id="form">
             <div id='email'>
               <div>Email:</div>
               <input type="email" class="red_border"/>
               <p>Invalid email format</p>
             </div>
             <div id='pass'>
              <div>Password:</div>
              <input type="password" class="red_border" onChange={(e)=> setPass(e.target.value)}/>
              <p>Password must be atleast 8 character</p>
            </div>
            <div id='cp'>
              <div>Confirm Password:</div>
              <input type="password" class="red_border" onChange={(e)=> setConfirm_pass(e.target.value)}/>
              <p>Password do not match</p>
            </div>
            <button onClick={Sign_up()}>Sign Up</button>
        </div>
    </div>
  );
}

export default App;
