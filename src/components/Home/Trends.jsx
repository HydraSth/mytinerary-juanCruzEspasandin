import React, { useEffect, useState } from 'react';
import Card from './Cards';
export default function Trends(){
  const [index,setIndex]=useState(0);
  const cityArray=[
    [
      {name:"París",link:"",photo:"https://media.cnn.com/api/v1/images/stellar/prod/american-expats-paris.jpeg?c=16x9&q=h_720,w_1280,c_fill/f_webp"},
      {name:"Prípiat",link:"",photo:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTNS3rWdJdcC9NUSEQ1NuEXGSNKbVGSjUeq_mREqlX3f8VIXRQJ7rV3f8hY4GGkYUeI"},
      {name:"Shanghai",link:"",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRAE-bwWRg1BYHtaUH49MLTMvNYVO46UXL9xH2cttQL-3_1FRIOfba312Zu3Q&s=19"},
      {name:"St. Petersburg",link:"",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0dYH7OxsxL6pGBoDrMXiP8-8-eLB7fcbwqEMfn7Mvg&s"} 
    ]
    ,
    [
      {name:"Buenos Aires",link:"",photo:"https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ="},
      {name:"Roma",link:"",photo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg"},
      {name:"Barcelona",link:"",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2U0aBdmcOl2T-kA0mynYvQOFcsyKtH3E2cARpHTQfA&s"},
      {name:"Mexico City",link:"",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDAEeOqQSCcGowmHBSGEhPfpE5Eqli52yEANc8_nQnA&s"}    
    ]
    ,
    [
      {name:"Pekín",link:"",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFFwfYe1lg5aaGgNrZKHeDlq0oAzakH0zi5qKex1U7w&s"},
      {name:"Ámsterdam",link:"",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRoD7Mpi1nOrIzt2k9w-GtOmqr2QoBnGlxmSdjnS_SCpLIASH3GaOacS3zxGA&s=19"},
      {name:"Doha",link:"",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSVt6CdgfwuGLpDzoM8WrC1Zjey0YexQL8omd1-vUlJxXAGph0vLemEBv84Lw&s=19"},
      {name:"Bogota",link:"",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWU4psfygesGxGuRkU8gjJEUU9pawQtvIEQDb4cENqQ&s"} 
    ]
  ]
  const [citys,setCity]= useState([cityArray[0][0],cityArray[0][1],cityArray[0][2],cityArray[0][3]]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNewCity();
    }, 6000); 

    return () => {
      clearInterval(interval);
    };
  }, [citys]);

  const handlePrevCity= ()=>{
    setCity(cityArray[index])
    index==0?setIndex(2):setIndex(index-1);
  }
  const handleNextCity= ()=>{
    setCity(cityArray[index])
    index==2?setIndex(0):setIndex(index+1);
  }
  
  return(
    <> 
    <h4 className='mt-3 text-center lg:text-start flex italic place-content-center font-semibold text-lg w-10/12 mx-auto lg:m-0 lg:w-11/12'>
      Find your perfect trip, designed by insiders who know and love their cities
      <span className='Quote'>"</span>
    </h4>
    <div>
        <h4 className='flex place-content-center mb-0 font-semibold text-primary opacity-30'>Trending Mytinerarys</h4>
      <div className='flex mt-0 place-content-center'>
        <div className='flex flex-wrap lg:w-4/5 place-content-center w-3/4'>
          <button onClick={()=>handlePrevCity()}><i className="bi text-primary bi-caret-left-fill"></i></button>
              {
                citys.map((city) => (
                  <Card key={`${city.name+Math.random()}`} name={`${city.name}`} photo={`${city.photo}`}/>
                ))
              }
          <button onClick={()=>handleNextCity()}><i className="bi text-primary bi-caret-right-fill"></i></button>
        </div>
      </div>
    </div>
    </>
  )
}
