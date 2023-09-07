import {React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginActions from '../../redux/actions/login_action';

export default function Step1(){
    const dispatch= useDispatch()
    const login_reducer = useSelector((state)=>state.login_reducer.create_step)
    const handleClick=()=>{
        dispatch(loginActions.modify_create_step(login_reducer+1))
    }    
    
    return(
        <>
        <section className='w-2/3'>
            <p className='text-sm text-inverse-theme/60'>step 1 of 2</p>
            <h2 className='text-2xl font-bold mb-3'>Create account</h2>
            <div className='flex flex-row gap-3'>
                <img className='w-10' src={"./public/assets/google_ico.png"} alt="" />
            </div>
        </section>
        <h6 id="floriture" className='my-5 w-full text-inverse-theme/40'>O</h6>
        <section className='flex flex-col w-2/3'>
            <h3 className='text-sm font-medium'>Sign up with email</h3>
            <h4 className='text-sm mb-4'>Already have an account?<a className='text-primary'> Sign in</a></h4>
            <form className='flex flex-col gap-3'>
                <input type="email" className='border-b text-inverse-theme/75 border-primary text-sm pb-4' placeholder="Email" />
                <input type="password" autoComplete='off' className='border-b text-inverse-theme/75 border-primary text-sm pb-4' placeholder="Password"/>
            </form>
            <button onClick={()=>handleClick()} className='bg-primary text-white py-2 px-4 rounded-md mt-12 w-1/3 self-end text-sm'>Continue</button>
        </section>
        </>
    )
}
