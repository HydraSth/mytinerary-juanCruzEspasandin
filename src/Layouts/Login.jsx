import { useEffect,useState,React }  from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Form from '../components/Login/CreateAccount.jsx'
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function Login(){
  const log_state=useSelector((state)=>state.user_reducer.logged)
  const cities_reducer = useSelector((state) => state.cities_reducer.cities);
  const [bgImg, setBgImg] = useState("https://arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/FPSPLRS3U7MKJL6G6UI24DPANU.jpg")
  useEffect(() => {
    const random_img=cities_reducer[Math.floor(Math.random()*cities_reducer.length)].photo;
    if(random_img){
      setBgImg(random_img)
    }
  },[cities_reducer])

  useEffect(() => {
    if(log_state){
      window.location.href=("/")
    } 
  },[])

  return (
    <>
    <div  style={{ backgroundImage: `url('${bgImg}')` }} className='flex flex-col h-screen place-content-between bg-cover bg-inverse-theme bg-blend-multiply'>
        <Header/>
        <Form/>
        <Footer/>
    </div>
    </>
  )
}


