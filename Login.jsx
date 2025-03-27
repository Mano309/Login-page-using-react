import { useState } from "react";

function Login(){
    const[name,setname]=useState("")
    const[pass,setpass]=useState("")


    function chang(a){
        setname(a.target.value)
    }

    function ch(a){
        setpass(a.target.value)
    }


    function handle(){

        if (!name.trim()) {
            setname(!name)
            
        }

        if (!pass.trim()) {
            setpass(!pass)
        }

        else {
          alert("Login successful");
        }
      }
    
    return(
        <div id="a">
            <div>
                <h1>Login Page</h1>
                <br></br>
            <label>UserName:</label>
            <input type="text" id="username" onChange={chang}  ></input>
            {
                name && <h5>please enter the username👆👆👆</h5>
            }
            </div>
            <br></br>
            <br></br>
            <div>
            <label>Password:</label>
            <input type="password" id="password" onChange={ch} ></input>
            {
                pass && <h5>please enter password 👆👆👆</h5>
            }
            </div>
            <br></br>
            <br></br>
            <button type="submit" onClick={handle}>Login</button>
        </div>
        
    )
}
export default Login