import React, { useState } from "react";
import signUpCss from './SignUp.module.css'


export default function SignUp ({HidePage}){

    const [formData, setFormData] = useState(
        {
            firstName: "",
            surname: "",
            emailnumber:``,
            password: ``
        }
    )
    const auth1=()=>{
        if (formData.firstName ==="") {
            document.getElementById("firstname").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }
    const auth2=()=>{
        if (formData.surname ==="") {
            document.getElementById("surname").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }
    const auth3=()=>{
        if (formData.emailnumber ==="") {
            document.getElementById("emailnumber").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }
    const auth4=()=>{
        if (formData.password ==="") {
            document.getElementById("password").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }


    const auth =()=>{
        if (formData.firstName ==="") {
            document.getElementById("firstname").style.borderColor="red"
        }
        else{
            document.getElementById("firstname").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
        if (formData.surname ==="") {
            document.getElementById("surname").style.borderColor="red"
        }
        else{
            document.getElementById("surname").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
        if (formData.emailnumber ==="") {
            document.getElementById("emailnumber").style.borderColor="red"
        }
        else{
            document.getElementById("emailnumber").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
        if (formData.password ==="") {
            document.getElementById("password").style.borderColor="red"
        }
        else{
            document.getElementById("password").style.borderColor="rgba(169, 167, 167, 0.448)"
        }
    }
    
    const handleOnchange=(event)=>{
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name] : value,
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (formData.firstName && formData.surname && formData.password && formData.emailnumber !="") {
            console.log(formData);
        }
    }
    

    const closeModal = ()=>{
        HidePage((previouState)=> !previouState)
      
    }

    return(
        <div id={signUpCss.background}>
            <form onSubmit={handleSubmit} action="">
                <div className={signUpCss.split}>
                    <div className={signUpCss.split1} >
                    <h2>Sign Up</h2>
                    <p>It's quick and easy</p>
                    </div>
                    <div className={signUpCss.split2} onClick={()=>{closeModal()}}>
                        <i className="fa-solid fa-xmark fa-xl" style={{color:"#6f6f71"}}></i>
                    </div>
                </div>
                
                <hr />
                <div className={signUpCss.name}>
                    <input id="firstname" onChange={(e)=>{handleOnchange(e),auth1()}} className={signUpCss.namee} value={formData.firstName} type="text" placeholder="First name" name="firstName"/>
                    <input id="surname" onChange={(e)=>{handleOnchange(e),auth2()}} className={signUpCss.namee} value={formData.surname} type="text" placeholder="Surname" name="surname"/>
                </div>
                <input id="emailnumber" onChange={(e)=>{handleOnchange(e),auth3()}} className={signUpCss.name1} value={formData.emailnumber}  type="text" placeholder="Mobile number or email address" name="emailnumber"/>
                <input id="password" onChange={(e)=>{handleOnchange(e),auth4()}} className={signUpCss.name1} value={formData.password} type="password" placeholder="New password"  name="password"/>
                <h6>Date of birth <span>?</span></h6>
                <div id={signUpCss.select}>
                <select name="" id="day">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                </select>
                <select name="" id="month">
                    <option value="">Jan</option>
                    <option value="">Feb</option>
                    <option value="">Mar</option>
                    <option value="">Apr</option>
                    <option value="">May</option>
                    <option value="">Jun</option>
                    <option value="">Jul</option>
                    <option value="">Aug</option>
                    <option value="">Sep</option>
                    <option value="">Oct</option>
                    <option value="">Nov</option>
                    <option value="">Dec</option>
                </select>
                <select name="" id="year">
                    <option value="">2024</option>
                    <option value="">2023</option>
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                    <option value="">2019</option>
                    <option value="">2018</option>
                    <option value="">2017</option>
                    <option value="">2016</option>
                    <option value="">2015</option>
                    <option value="">2014</option>
                    <option value="">2013</option>
                </select>
                </div>
                <h6>Gender <span>?</span></h6>
                <div id={signUpCss.gender}>
                <label  >
                    Female
                    <input onChange={handleOnchange}   value="female" type="radio"  name="gender" />
                </label>
              
                <label>
                    Male
                    <input onChange={handleOnchange}  value="male"  type="radio" name="gender" id="male" />
                </label> 
                <label>
                    Custom
                    <input onChange={handleOnchange} value="gender1"  type="radio" name="gender" id="custom" />
                </label>  
                </div>
                <p className={signUpCss.the}>
                People who use our service may have uploaded your contact information to Facebook. Learn more.
                </p>
                <p className={signUpCss.the1}>
                    By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                </p>
                <button onClick={auth} id={signUpCss.btn}>Sign up</button>
            </form>
        </div>
    )
}