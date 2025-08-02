import { EMAIL_HOST, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USER,EMAIL_PASS } from "../config/config.js"
import nodemailer from 'nodemailer'

export const SendEmail=async(EmailTo,EmailText,EmailSubject)=>{

    let transporter= nodemailer.createTransport({
        host:EMAIL_HOST,
        port:EMAIL_PORT,
        secure:EMAIL_SECURITY,
        auth:{
            user:EMAIL_USER,
            pass:EMAIL_PASS
        },
        tls:{
            rejectUnauthorized:false
        }})
        let mailOptions={
            from:'PROJECT M-17 <info@teamrabbil.com>',
            to:EmailTo,
            subject:EmailSubject,
            text:EmailText
        }
        return await transporter.sendMail(mailOptions)
    }
export default SendEmail;
