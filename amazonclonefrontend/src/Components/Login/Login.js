import React from 'react'
import './Login.css'

const Login = () => {
    return(
        <div className='login_page'>
            <div id='test'>
                <form id='login_form'>
                    <label className='login_label'>Username</label>
                    <input className='login_input' type='text' placeholder='username or email'></input>
                    <br/>
                    <label className='login_label'>Password</label>
                    <input className='login_input' type='text' placeholder='username'></input>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login 