import React from "react"
import Card from "../Cards"
import { useState, useEffect } from "react"
import { allCities } from "../../services/Events.js"
import ErrorCard from "../ErrorCard"

export default function Search() {
	const [fectchedCities, setfectchedCities] = useState([{ name: "loading" }])
	const [cities, setCities] = useState([{ name: "loading" }])

	const fetchData = async () => {
		try {
			const fetchedCities = await allCities()
			setCities(fetchedCities.cities)
			setfectchedCities(fetchedCities.cities)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const [filter, setFilter] = useState("")
	const handleInput = () => {
		const search_input = document.getElementById("city-search")
		const input_value = search_input.value
		const value_without_space = input_value.toLowerCase().replace(/\s/g, "")
		setFilter(value_without_space)
	}

	function citys_filtered() {
		const patron = new RegExp(`^${filter}`)
		return fectchedCities.filter((city) => {
			return city.name.toLowerCase().match(patron)
		})
	}

	useEffect(() => {
		setCities(citys_filtered())
	}, [filter])

	return (
		<div className="flex flex-col place-content-center gap-5 align-items-center align-middle">
			<div className="flex place-content-center">
				<button>
					<i
						id="icon"
						className="bi relative start-8 top-1.5 opacity-40 bi-search z-10"
					></i>
				</button>
				<input
					autoComplete="off"
					id="city-search"
					onChange={() => handleInput()}
					className="h-10 ps-10 flex my-auto mt-3 drop-shadow-md rounded-lg font-normal"
					placeholder="Search your city"
					type="search"
				></input>
			</div>
			<div
				id="search-container"
				className="flex gap-4 h-80 sm:h-auto sm:gap-0 flex-col sm:flex-row self-center pb-3 sm:w-5/6 overflow-x-scroll"
			>
				{
					cities.length == 0 ?
					<ErrorCard/> 
					: cities.map((city) => (
						<Card
							key={`${city.name + Math.random()}`}
							name={`${city.name}`}
							country={`${city.country}`}
							photo={`${city.photo}`}
						/>
					))
				}
			</div>
		</div>
	)
}
