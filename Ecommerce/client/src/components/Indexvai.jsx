import React, { useState } from "react";
import './Index.css';
import { useNavigate } from 'react-router-dom';


const Index = ({
    isSignInPage = true,
}) => {
    const navigate = useNavigate()
    const  [values, setValues] = useState({
        name: '',
        contact: '',
        email: '',
        password: ''
    })
  
   return(
    <>
        <div className="main">
            <div className="signin">
                <div className="pic"></div>
               <div className="put">
                    <form>
                        <h2>{isSignInPage ? 'SignIn' : 'SignUp'}</h2>
                        <div className="box">
                            { !isSignInPage && <div className="container">
                                <label htmlFor="">Name</label><br />
                                <input type="text" className="fill" placeholder="Full Name" onChange={handleInput}/>
                            </div>}
                            { !isSignInPage && <div className="container">
                                <label htmlFor="">Contact No.</label><br />
                                <input type="text" className="fill" placeholder="Enter 10 digit number" onChange={handleInput}/>
                            </div>}
                            <div className="container">
                                <label htmlFor="">Email</label><br />
                                <input type="email" className= "fill" placeholder="Email Address" onChange={handleInput}/>
                            </div>
                            <div className="container">
                                <label htmlFor="">Password</label><br />
                                <input type="password" className="fill" placeholder="Enter Your Password" onChange={handleInput}/>
                            </div>
                        </div>
                        <button onClick = {() =>{ navigate(`/`)}} className="putt">{isSignInPage ? 'SignIn' : 'SignUp'}</button>
                        <p>{isSignInPage ? 'Dont have an account? ' : 'Already have an account? '}<a onClick = {() => navigate(`/users/${isSignInPage ? 'Sign_up' : 'Sign_in'}`)} href="#">{isSignInPage ? 'Sign up' : 'Sign in'}</a></p>
                    </form>
                </div>
                
            </div>
        </div>
    </>
   )
}
export default Index;