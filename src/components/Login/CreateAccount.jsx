import React from 'react';
import Step1 from './SignUpStep1';
import Step2 from './SignUpStep2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from './Button';
import SignStep1 from './SignInStep1';
import SignStep2 from './SignInStep2';

export default function Form(){
    const sign_reducer = useSelector((state)=>state.login_reducer.sign)
    const sign_step_reducer = useSelector((state)=>state.login_reducer.sign_step)
    const login_reducer = useSelector((state)=>state.login_reducer.create_step)
    const log_err_msg = useSelector((state)=>state.user_reducer.login_error_message)

    return(
        <>
            <Link className="sm:hidden absolute z-20 shadow-md left-5 place-items-center transition-all duration-300 p-2 top-3 rounded-md text-center hover:bg-primary hover:text-theme bg-theme" to={'/'}>
				<i className="bi bi-arrow-left-short"/>
			</Link>
            <div className="bg-theme rounded-md flex flex-col place-content-center items-center h-4/5 w-11/12 mt-16 sm:w-1/2 sm:mt-0 sm:self-end sm:me-10 lg:w-1/3 self-center">
                <Button/>
                {
                    log_err_msg?
                        log_err_msg=="User logged in"?
                        <h5 className='text-sm bg-green-300 text-black/60 shadow-md px-2 rounded-sm'>{log_err_msg}</h5>
                        :
                        <h5 className='text-sm bg-rose-300 text-black/60 shadow-md px-2 rounded-sm'>{log_err_msg}</h5>
                    :
                    null
                }
                {
                    sign_reducer==false?
                        login_reducer==1?
                        <Step1/>
                        :
                        <Step2/>
                    :
                        sign_step_reducer==1?
                        <SignStep1/>
                        :
                        <SignStep2/>
                }
            </div>
        </>
    )
}
