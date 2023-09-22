import React from "react"
import { useEffect, useState } from "react"
import getIntineraries from "../../services/Itinerary"
import Itinerary from "./Itinerary"
import EmptyItinerary from "./EmptyItinerary"
import NotLogged from "./NotLogged"
import axios from "axios"

export default function Itineraries({cityName}) {
    const [itineraries, setItineraries] = useState([])

    const fetchData = async () => {
		try {
            let token=  localStorage.getItem('token')
            const config = {
                method: 'get',
                url: `https://mytinerary.up.railway.app/api/cityItineraries?name=${cityName}`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            };

            axios(config)
                .then((response) => {
                    // La respuesta exitosa se encuentra en la variable 'response.data'
                    setItineraries(response.data.itineraries)
                })
                .catch((error) => {
                    // Maneja errores, como respuestas 401 (No autorizado) o errores de red
                    console.error('Error:', error);
                });

		} catch (error) {
            console.log(error)
		}
	}

    useEffect(() => {
        fetchData()
	},[])
    
	return (
        <>
            { 
                localStorage.getItem('token')?
                    itineraries.length == 0 ?
                        <EmptyItinerary/>
                    :
                        itineraries.map(itinerary => (
                            <Itinerary key={itinerary._id} itinerary={itinerary} />
                        ))
                :
                <NotLogged/>
            }
        </>
    )
}
