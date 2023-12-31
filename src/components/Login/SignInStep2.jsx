import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';
import userActions from '../../redux/actions/user_actions';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PostBody } from '../../services/LoginRequest';


export default function SignStep2(){
    const dispatch= useDispatch()
    const sign_reducer = useSelector((state)=>state.login_reducer.sign_step)
    const mail_reducer = useSelector((state)=>state.user_reducer.login_mail)
    const password_reducer = useSelector((state)=>state.user_reducer.login_password)
    const log_state=useSelector((state)=>state.user_reducer.logged)
    const handlePrevClick=()=>{
        dispatch(loginActions.modify_sign_step(sign_reducer-1))
    }    
    const handleFinish=()=>{
        const data={
            email:`${mail_reducer}`,
            password:`${password_reducer}`
        }
        PostBody('https://mytinerary.up.railway.app/api/auth/signIn', data)
    }    

    useEffect(() => {
        if(log_state){
            window.location.href=("/");
        }
    })

    const handlePasswordChange=(e)=>{
        dispatch(userActions.modify_login_password(e.target.value))
        dispatch(userActions.modify_login_error_message(""))
    }

    const handleEnter=(e)=>{
        if(e.key=="Enter"){
            e.preventDefault()
            handleFinish()
        }
    }

    return(
        <>
        <section className='w-2/3'>
            <p className='text-sm text-inverse-theme/60'>step 2 of 2</p>
            <h2 className='text-2xl font-bold mb-3'>Enter your password</h2>
        </section>
        <section className='flex flex-col w-2/3'>
           <section className='h-10 flex place-items-center mb-5'>
                <img src='./public/assets/UserIco/Ico-Cat.png' className='h-full me-3 bg-primary rounded-full p-2'/>
                <span className='text-sm '>
                    <h2>{mail_reducer}</h2>
                    <h2 className='text-xs text-inverse-theme/60'>Personal account</h2>
                </span>
           </section>
            <form className='flex flex-col gap-3'>
                 <input type="password" onChange={handlePasswordChange} onKeyDown={(e)=>handleEnter(e)} value={password_reducer} autoComplete='off' className='border-b text-inverse-theme/75 border-primary text-sm pb-4' placeholder="Password"/>
            </form>
                <div className='flex place-content-between'>
						<button
							onClick={() => handlePrevClick()}
							className="border-primary border hover:bg-primary hover:text-theme transition-colors duration-300 text-primary py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm"
						>
							Previous
						</button>
						<button
							onClick={() => handleFinish()}
							className="bg-primary text-white py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm"
						>
							Continue
						</button>
					</div>
        </section>
        </>
    )
}
