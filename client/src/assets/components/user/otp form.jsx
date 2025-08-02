import React from 'react';
import userStore from '../store/userstore.js';
import UserSubmitButton from './SubmitButton.jsx';
import ValidationHelper from '../utility/validationhelper.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



const OtpForm = (props) => {
    const navigate=useNavigate();
    const {OtpFormData,OtpFormOnChange,VerifyLoginRequest}=userStore();

    const onFormSubmit=async ()=>{
        if(ValidationHelper.IsEmpty(OtpFormData.otp)){
            toast.error("Valid Pin Required")
        }else {
            let res=await VerifyLoginRequest(OtpFormData.otp);
            console.log(OtpFormData.otp)
            res?navigate("/"):toast.error("Something Went Wrong !")
        }
    }





    return (
            <div className="container section">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-5">
                            <h4>Enter The Otp</h4>
                            <p>A verification code will be sent to the email address you provide</p>
                            <input value={OtpFormData.otp} onChange={(e)=>{OtpFormOnChange("otp",e.target.value)}} placeholder="otp" type="string" className="form-control"/>
                            <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Next"/>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default OtpForm;