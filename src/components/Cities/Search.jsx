import React from 'react'
import './Hero.css'
import Card from './Cards';
import { useState, useEffect } from 'react';
export default function Search(){
    const cityArray=[
        {country:"France",name:"París",photo:"https://media.cnn.com/api/v1/images/stellar/prod/american-expats-paris.jpeg?c=16x9&q=h_720,w_1280,c_fill/f_webp"},
        {country:"Ukraine",name:"Prípiat",photo:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTNS3rWdJdcC9NUSEQ1NuEXGSNKbVGSjUeq_mREqlX3f8VIXRQJ7rV3f8hY4GGkYUeI"},
        {country:"China",name:"Shanghai",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRAE-bwWRg1BYHtaUH49MLTMvNYVO46UXL9xH2cttQL-3_1FRIOfba312Zu3Q&s=19"},
        {country:"Russia",name:"St. Petersburg",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0dYH7OxsxL6pGBoDrMXiP8-8-eLB7fcbwqEMfn7Mvg&s"},
        {country:"Argentina",name:"Buenos Aires",photo:"https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ="},
        {country:"Italy",name:"Roma",photo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg"},
        {country:"Spain",name:"Barcelona",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2U0aBdmcOl2T-kA0mynYvQOFcsyKtH3E2cARpHTQfA&s"},
        {country:"Mexico",name:"Mexico City",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDAEeOqQSCcGowmHBSGEhPfpE5Eqli52yEANc8_nQnA&s"},    
        {country:"China",name:"Pekín",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFFwfYe1lg5aaGgNrZKHeDlq0oAzakH0zi5qKex1U7w&s"},
        {country:"The Kingdom of the Netherlands",name:"Ámsterdam",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRoD7Mpi1nOrIzt2k9w-GtOmqr2QoBnGlxmSdjnS_SCpLIASH3GaOacS3zxGA&s=19"},
        {country:"Qatar",name:"Doha",photo:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSVt6CdgfwuGLpDzoM8WrC1Zjey0YexQL8omd1-vUlJxXAGph0vLemEBv84Lw&s=19"},
        {country:"Colombia",name:"Bogota",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWU4psfygesGxGuRkU8gjJEUU9pawQtvIEQDb4cENqQ&s"} 
     ]
    const [citys,setCity]= useState(cityArray.slice(0,4));
  
    const [filter,setFilter]=useState("")
    const handleInput=()=>{
        const search_input= document.getElementById('city-search');
        const input_value= search_input.value;
        console.log(input_value);
        console.log(input_value);
        setFilter(input_value.toLowerCase());
    }
    
    function citys_filtered (){
      const patron = new RegExp(`^${filter}`);
      return cityArray.filter((city)=>{
          return city.name.toLowerCase().match(patron);
      })
    } 

    useEffect(() => {
        setCity(citys_filtered());
    },[filter])

    return (
    <>
        <div className='flex place-content-center mt-48'>
            <button>
                <i id="icon" className="bi relative start-8 top-1.5 opacity-40 bi-search z-10"></i>
            </button>
            <input id="city-search" onChange={()=>handleInput()} className='h-10 ps-10 flex my-auto mt-3 drop-shadow-md rounded-lg font-normal' placeholder='Search your city' type='search'></input>
        </div>
        <div id='search-container' className='flex self-center  w-5/6 overflow-x-scroll'>
            {
            citys.map((city) => (
                <Card key={`${city.name+Math.random()}`} name={`${city.name}`} country={`${city.country}`} photo={`${city.photo}`}/>
            ))
            }
        </div>
    </>
  )
}
