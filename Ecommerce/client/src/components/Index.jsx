import React from "react";
import './Index.css';
import { useNavigate } from 'react-router-dom';


const Index = ({
    isSignInPage = true,
}) => {
    const navigate = useNavigate()
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
                                <input type="text" className="fill" placeholder="Full Name"/>
                            </div>}
                            { !isSignInPage && <div className="container">
                                <label htmlFor="">Contact No.</label><br />
                                <input type="text" className="fill" placeholder="Enter 10 digit number"/>
                            </div>}
                            <div className="container">
                                <label htmlFor="">Email</label><br />
                                <input type="email" className= "fill" placeholder="Email Address"/>
                            </div>
                            <div className="container">
                                <label htmlFor="">Password</label><br />
                                <input type="password" className="fill" placeholder="Enter Your Password"/>
                            </div>
                        </div>
                        <button onClick = {() => navigate(`/home`)} className="putt">{isSignInPage ? 'SignIn' : 'SignUp'}</button>
                        <p>{isSignInPage ? 'Dont have an account? ' : 'Already have an account? '}<a onClick = {() => navigate(`/users/${isSignInPage ? 'Sign_up' : 'Sign_in'}`)} href="#">{isSignInPage ? 'Sign up' : 'Sign in'}</a></p>
                    </form>
                </div>
                
            </div>
        </div>
    </>
   )
}
export default Index;