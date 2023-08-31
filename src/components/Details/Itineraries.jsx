import React from "react"
import { useEffect, useState } from "react"
import getIntineraries from "../../services/Itinerary"
import Itinerary from "./Itinerary"
import EmptyItinerary from "./EmptyItinerary"

export default function Itineraries({cityName}) {
    const [itineraries, setItineraries] = useState([])

    const fetchData = async () => {
		try {
			const res_itineraries = await getIntineraries(cityName)
			setItineraries(res_itineraries)
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
                itineraries.length == 0 ?
                    <EmptyItinerary/>
                :
                itineraries.map(itinerary => (
                    <Itinerary key={itinerary._id} itinerary={itinerary} />
                ))
            }
        </>
    )
}
