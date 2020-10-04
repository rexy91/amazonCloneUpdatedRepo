import React from 'react'


const Login = () => {

    return(
        <div>
                <form>
                    <label>Username</label>
                    <input type='text' placeholder='username or email'></input>
                    <br/>
                    <label>Password</label>
                    <input type='text' placeholder='username'></input>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
        </div>
    )
}

export default Login 