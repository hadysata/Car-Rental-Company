import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import   '../styles/sign_styles.css'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'

export default function Login() {

    const [error, setError] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault() // prevent reloading the page
        const email = e.currentTarget.email.value
        const password = e.currentTarget.password.value
        console.log(email,password)
        if(!email || !password){
            console.log(email,password,e.currentTarget)
            setError('Please make sure to write your email and password')
            return
        }
        /*
        if not error then send the data to firebase,
        if error happens then but it inside
        setError(...)
        */
       
    }

    return (
        <>
            <Navbar />
            <div className="center"> 
                <div class="card" style ={{'width':'22rem'}}>
                    <div class="card-body ">
                        {
                            error &&
                            <div class="alert alert-danger " style={{'fontSize':13}} role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                                {error}
                                  
                            </div>
                        }
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="font-weight-bold" >Email address</label>
                                <input
                                type="email"
                                name="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="YouLookNiceToday@hotmail.com"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Password</label>
                                <input
                                type="password" 
                                name="password"
                                className="form-control" 
                                id="exampleInputPassword1"
                                placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-block mt-4">
                            Sign in
                            </button>
                            <small  class="Have-account form-text text-muted mt-3 text-center">
                            Don't have an account?  
                            
                                <Link className="other-page-link"to="/signup">
                                &#160; Sign up.
                                </Link>
                            </small>
                            <small  class="Have-account form-text text-muted mt-2 text-center">
                             Maybe you forgot your password? it happens,   
                            
                                <Link className="other-page-link" to="/resetpassword">
                                &#160; Reset.
                                </Link>
                            </small>
                        </form>    
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}