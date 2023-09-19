import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';
import register_actions from '../../redux/actions/register_action';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { PostBody } from '../../services/LoginRequest';

export default function Step1(){
    const dispatch= useDispatch()
    const sign_reducer= useSelector((state)=>state.login_reducer.sign)
    const login_reducer = useSelector((state)=>state.login_reducer.create_step)

    const handleClick=()=>{
        dispatch(loginActions.modify_create_step(login_reducer+1))
    }    

    const changeSignIn=()=>{
        sign_reducer == false?
        dispatch(loginActions.modify_sign(true))
        : 
        dispatch(loginActions.modify_sign(false))
    }

    const signUpGoogle=(credentialResponse)=>{
        const decoded=jwtDecode(credentialResponse.credential)
        const user_obj={
            name: decoded.name,
            lastName: decoded.family_name??decoded.name,
            email: decoded.email,
            password: `${decoded.sub}${decoded.name}`,
            month_birth:"1",
            year_birth:"2023",
            photo:decoded.picture,
            country:"Undefined",
            mail_contact:false	
        }
        PostBody('https://mytinerary.up.railway.app/api/auth/signUp', user_obj);
    }

    let register_email=useSelector((state)=>state.register_reducer.email)
    let register_password=useSelector((state)=>state.register_reducer.password)
    const handleChangeEmail=(e)=>{
        dispatch(register_actions.change_email(e.target.value))
    }
    const handleChangePassword=(e)=>{
        dispatch(register_actions.change_password(e.target.value))
    }
    
    return(
        <>
        <section className='w-2/3'>
            <p className='text-sm text-inverse-theme/60'>step 1 of 2</p>
            <h2 className='text-2xl font-bold mb-3'>Create account</h2>
            <div className='flex place-content-center gap-3'>
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
        <h6 id="floriture" className='my-5 w-full text-inverse-theme/40'>O</h6>
        <section className='flex flex-col w-2/3'>
            <h3 className='text-sm font-medium'>Sign up with email</h3>
            <h4 className='text-sm mb-4'>Already have an account?
                <button onClick={()=>changeSignIn()} className='text-primary'> Sign in</button>
            </h4>
            <form className='flex flex-col gap-3'>
                <input type="email" onChange={handleChangeEmail} value={register_email} className='border-b text-inverse-theme/75 border-primary text-sm pb-4' placeholder="Email" />
                <input type="password" onChange={handleChangePassword} value={register_password} autoComplete='off' className='border-b text-inverse-theme/75 border-primary text-sm pb-4' placeholder="Password"/>
            </form>
            <button onClick={()=>handleClick()} className='bg-primary text-white py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm'>Continue</button>
        </section>
        </>
    )
}
