import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/tailwind.css'
import '../assets/animations.css'
import { useSelector } from 'react-redux';

export default function Menu (){
    const [display,setDisplay]=useState(false)
    const handleMenu=()=>{
        setDisplay(!display)
    }
    const isLoged=useSelector((state)=>state.user_reducer.logged)
    return(
        <>
            {
            display?
                <div className='z-20 absolute right-0 h-screen flex place-items-center'>
                    <div className='flex h-16 w-10 bg-white rounded-s-full place-content-center'>
                        <button className='ps-2 hover:scale-150 transition-transform text-primary' onClick={()=>handleMenu()}>
                            <i className="text-lg bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                    <div className='flex flex-col h-1/4 w-16 text-theme bg-primary rounded-s-lg place-content-center place-items-center'>
                        <Link to={'/'} className='hover:font-bold'>Home</Link>
                        <Link to={'/cities'} className='hover:font-bold'>Cities</Link>
                        {
                            isLoged?
                                null
                            :
                                <Link to={'/login'}>
                                Login
                                </Link>
                        }
                    </div>
                </div>
            :
                <div className='z-20 absolute right-0 h-screen flex place-items-center'>
                    <div className='flex h-16 w-10 bg-primary rounded-s-full place-content-center'>
                        <button className='ps-2 hover:scale-150 transition-transform text-theme' onClick={()=>handleMenu()}>
                            <i className="text-lg bi bi-caret-left-fill"></i>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
