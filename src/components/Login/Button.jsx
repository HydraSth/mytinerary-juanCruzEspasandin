import "./Button.css";
import loginActions from '../../redux/actions/login_action';
import { useDispatch,useSelector } from 'react-redux';

export default function Button(){
    const sign_reducer = useSelector((state)=>state.login_reducer.sign)
    const dispatch = useDispatch()
    const handleCheckBox=()=>{
        sign_reducer == false?
        dispatch(loginActions.modify_sign(true))
        : 
        dispatch(loginActions.modify_sign(false))
    }

    return(
    <label className="rocker rocker-small">
        <input onChange={()=>handleCheckBox()} type="checkbox"/>
        <span className="switch-left p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path xmlns="http://www.w3.org/2000/svg" d="M3 21.0001L14 21V5.98924C14 4.6252 14 3.94318 13.7187 3.47045C13.472 3.05596 13.0838 2.74457 12.6257 2.59368C12.1032 2.42159 11.4374 2.56954 10.1058 2.86544L7.50582 3.44322C6.6117 3.64191 6.16464 3.74126 5.83093 3.98167C5.53658 4.19373 5.30545 4.48186 5.1623 4.8152C5 5.19312 5 5.65108 5 6.56702V21.0001M13.994 5.00007H15.8C16.9201 5.00007 17.4802 5.00007 17.908 5.21805C18.2843 5.4098 18.5903 5.71576 18.782 6.09209C19 6.51991 19 7.07996 19 8.20007V21.0001H21M11 12.0001H11.01" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>    
        </span>
        <span className="switch-right p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>    
        </span>
    </label>

    )
}