import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';
import userActions from '../../redux/actions/user_actions';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Swal from 'sweetalert2';
import { GoogleLogin } from '@react-oauth/google'
import { PostBody } from '../../services/LoginRequest';

export default function SignStep1(){
    const dispatch= useDispatch()
    const sign_reducer = useSelector((state)=>state.login_reducer.sign_step) 
    const mail_reducer = useSelector((state)=>state.user_reducer.login_mail)
    const handleClick=()=>{
        mail_reducer=="" ?
        dispatch(loginActions.modify_sign_step(sign_reducer))
        :
        dispatch(loginActions.modify_sign_step(sign_reducer+1))
    }        
    const handleCreateAccount=()=>{
        sign_reducer == false?
        dispatch(loginActions.modify_sign(true))
        : 
        dispatch(loginActions.modify_sign(false))
    }
    const handleEmail=(event)=>{
        dispatch(userActions.modify_login_mail(event.target.value))
        dispatch(userActions.modify_login_error_message(""))
    }

    //Google SignIn
    const signUpGoogle=(credentialResponse)=>{
        const decoded=jwtDecode(credentialResponse.credential)
        const user_obj={
            email: decoded.email,
            password: `${decoded.sub}${decoded.name}`,
        }
        PostBody('http://localhost:3000/api/auth/signIn', user_obj)
    }

    return(
        <>
        <section className='w-2/3'>
            <p className='text-sm text-inverse-theme/60'>step 1 of 2</p>
            <h2 className='text-2xl font-bold mb-3'>Sign in</h2>
        </section>
        <section className='flex flex-col w-2/3'>
            <h4 className='text-sm mb-4'>New user? <button onClick={()=>handleCreateAccount()} className='text-primary'>Create an account</button></h4>
            <form className='flex flex-col gap-3'>
                <input required onChange={handleEmail} value={mail_reducer} type="email" className='border-b text-inverse-theme/75 border-primary text-sm pb-4' placeholder="Email" />
                <button type='submit' onClick={()=>handleClick()} className='bg-primary text-white py-2 px-4 rounded-md mt-10 w-1/3 self-end text-sm'>Continue</button>
            </form>
            <div className='flex flex-col place-items-center gap-3 mt-10'>
                <GoogleLogin
                onSuccess={credentialResponse => {
                    signUpGoogle(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
            </div>
        </section>
        </>
    )
}
