import React, { useEffect, useState } from 'react';
import Citys from './Citys';
export default function Trends(){
  const [index,setIndex]=useState(0);
  const cityArray=[
    [
      {name:"Buenos Aires",link:"",photo:"https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ="},
      {name:"Roma",link:"",photo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg"}
    ],
    [
      {name:"París",link:"",photo:"https://media.cnn.com/api/v1/images/stellar/prod/american-expats-paris.jpeg?c=16x9&q=h_720,w_1280,c_fill/f_webp"},
      {name:"Prípiat",link:"",photo:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTNS3rWdJdcC9NUSEQ1NuEXGSNKbVGSjUeq_mREqlX3f8VIXRQJ7rV3f8hY4GGkYUeI"}
    ],
    [
      {name:"Pekín",link:"",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFFwfYe1lg5aaGgNrZKHeDlq0oAzakH0zi5qKex1U7w&s"},
      {name:"Ámsterdam",link:"",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRoD7Mpi1nOrIzt2k9w-GtOmqr2QoBnGlxmSdjnS_SCpLIASH3GaOacS3zxGA&s=19"}
    ]
  ]
  const [citys,setCity]= useState([cityArray[0][0],cityArray[0][1]]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNewCity();
    }, 6000); 

    return () => {
      clearInterval(interval);
    };
  }, [citys]);

  const handleNewCity= ()=>{
    setCity(cityArray[index])
    index==2?setIndex(0):setIndex(index+1);
  }
  

  return(
    <>
      <h4 className='block mx-auto font-semibold'>Trending Mytinerarys</h4>
      <div className='flex place-content-center mt-5'>
        <button ><i className="bi text-primary bi-caret-left-fill"></i></button>
        <div className=' flex flex-wrap w-1/3'>
            {
              citys.map((city) => (
                <Citys key={`${city.name+Math.random()}`} name={`${city.name}`} photo={`${city.photo}`}/>
              ))
            }
        </div>
        <button onClick={()=>handleNewCity()}><i className="bi text-primary bi-caret-right-fill"></i></button>
      </div>
    </>
  )
}
