import React from 'react';
import userStore from '../store/userstore.js';
import UserSubmitButton from './SubmitButton.jsx';
import ValidationHelper from '../utility/validationhelper.js';
import { useNavigate } from 'react-router-dom';


const LoginForm = (props) => {
    const navigate=useNavigate();
    const {LoginFormData,LoginFormOnChange,userOtpRequest}=userStore();

    const onFormSubmit=async ()=>{
        if(!ValidationHelper.IsEmail(LoginFormData.email)){
            toast.error("Valid Email Address Required")
        }else {
            let res=await userOtpRequest(LoginFormData.email);
            console.log(res)
            res?navigate("/otp"):toast.error("Something Went Wrong !")
        }
    }





    return (
            <div className="container section">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-5">
                            <h4>Enter Your Email</h4>
                            <p>A verification code will be sent to the email address you provide</p>
                            <input value={LoginFormData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} placeholder="Email Address" type="email" className="form-control"/>
                            <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Next"/>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default LoginForm;