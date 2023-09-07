import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';
import userActions from '../../redux/actions/user_actions';
import { Link } from 'react-router-dom';


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
        dispatch(loginActions.modify_sign(false))
    }
    const handleEmail=(event)=>{
        dispatch(userActions.modify_login_mail(event.target.value))
        dispatch(userActions.modify_login_error_message(""))
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
            <div className='flex flex-col gap-3 mt-10'>
                <Link className='hover:scale-105 transition duration-300 hover:bg-gray-200 flex flex-row w-full rounded-full place-content-center items-center bg-gray-50 shadow-md'>
                    <img className='w-5 py-4' src={"./public/assets/google_ico.png"} alt="" />
                    <h5 className='ps-3 text-sm text-inverse-theme/80'>Continue with Google</h5>
                </Link>
            </div>
        </section>
        </>
    )
}
