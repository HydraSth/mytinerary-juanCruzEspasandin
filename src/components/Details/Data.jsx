import { Link, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { Citie } from "../../services/Event"

export default function Data(){
	const [city, setCity] = useState('')
	const {cityName} = useParams();
	const fetchData = async () => {
		try {
			const cities = await Citie(cityName)
			setCity(cities[0])
			console.log(cities);
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	},[])

	return (
		<>
			<main className="min-h-screen">
				<div className="min-h-96 flex flex-row py-10 md:m-0 md:flex-col place-content-center bg-cover bg-center bg-primary bg-blend-multiply" style={{backgroundImage: `url(${city.photo})`}}>
					<Link className="absolute z-20 sm:left-5 transition-all duration-300 sm:top-16 sm:bottom-auto left-5 bottom-16 rounded-md ps-1 py-3 pe-3 sm:w-2/12 text-center hover:bg-primary hover:text-theme bg-theme" to={'/cities'}>
						<i class="bi bi-arrow-left-short me-2"></i>
						Back to cities
					</Link>
					<section className="flex align-middle flex-col place-items-center">
						<h1 className="font-bold text-6xl text-theme">{city.name}</h1>
						<h1 className="font-medium text-3xl text-theme opacity-70">{city.country}</h1>
						<p className="text-lg text-theme w-1/2 md:w-1/3 text-justify mt-5">{city.description}</p>
					</section>
				</div>
				<section className="flex flex-col place-items-center mt-10">
					<section className="flex flex-col place-items-center text-justify w-3/6 bg-theme rounded-lg drop-shadow-md py-5">
						<h2 className="font-bold">Intineraries availables</h2>
						<img src="assets/ico-details.png" className="w-1/6"/>
					</section>
				</section>
			</main>
		</>
	)
}
