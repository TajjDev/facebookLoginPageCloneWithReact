import React from "react";
import loginCss from './Login.module.css'
import { useState } from "react";


export default function Login ({ShowSignUp}){

    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const togglePage = ()=>{
        ShowSignUp((previousState) => !previousState)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (formData.username && formData.password !="") {
            console.log(formData);
        }
        
    }
    const handleOnchange=(event)=>{
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name] : value,
        }));
    }
    const auth1=()=>{
        if (formData.username === "") {
            document.getElementById("ppp").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }
    const auth2=()=>{
        if (formData.password === "") {
            document.getElementById("ppp2").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }
    const authenticate =()=>{
        if (formData.username === "") {
            document.getElementById("ppp").style.borderColor="red"
        }
        else{
            document.getElementById("ppp").style.borderColor="transparent"
        }
        if (formData.password === "") {
            document.getElementById("ppp2").style.borderColor="red"
        }
        else{
            document.getElementById("ppp2").style.borderColor="transparent"
        }
    }


    return(
       <main>
        <div id={loginCss.contain}>
            <section id={loginCss.secOne}>
                <div>
                    <h1>facebook</h1>
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
            </section>
            <section id={loginCss.secTwo}>
                <form onSubmit={handleSubmit} action="">
                <input value={formData.username} id="ppp" onChange={(e)=>{handleOnchange(e), auth1()}} type="text" placeholder="Email address or phone number" name="username"/>
                 <input value={formData.password} id="ppp2" onChange={(e)=>{handleOnchange(e),auth2()}} type="password" placeholder="Password" name="password"/>
                 <button onClick={authenticate} id={loginCss.first}>Log in</button>
                 <p>Forgotten password?</p>
                 <hr />
                 <button onClick={togglePage} id={loginCss.two}>Create new account</button>
                </form>
                <p id={loginCss.three}> <span>Create a Page</span> for a celebrity, brand or business.</p>
            </section>
            </div>
       </main>
    )
}