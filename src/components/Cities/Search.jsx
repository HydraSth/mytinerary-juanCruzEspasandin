import React from "react"
import Card from "../Cards"
import {useEffect } from "react"
import getCity from "../../services/Event.js"
import ErrorCard from "../ErrorCard"
//Imports para redux
import { useDispatch, useSelector } from "react-redux"
import filterActions from "../../redux/actions/filter_action"
import citiesActions from "../../redux/actions/cities_action"

export default function Search() {
	const dispatch = useDispatch()
	const cities_reducer = useSelector((state) => state.cities_reducer.cities);
	const filter_reducer = useSelector((state) => state.filter_reducer.filter);

	const fetchData = async () => {
		if(!filter_reducer == ""){
			const fetchedCity = await getCity(filter_reducer)
			dispatch(citiesActions.add_city({cities:fetchedCity}))
		}else{
			dispatch(citiesActions.get_cities())
		}
	}

	useEffect(() => {	
		dispatch(filterActions.modify_filter(""))
	}, [])

	const handleInput = () => {
		const search_input = document.getElementById("city-search")
		const input_value = search_input.value
		const value_without_space = input_value.toLowerCase().replace(/\s/g, "")
		dispatch(filterActions.modify_filter(value_without_space))
	}

	useEffect(() => {
		fetchData()
	}, [filter_reducer])

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
				className="flex gap-4 h-80 sm:h-auto flex-col sm:flex-row self-center pb-3 sm:w-5/6 overflow-x-scroll"
			>
				{
					cities_reducer.length == 0 
					?
					<ErrorCard/> 
					: cities_reducer.map((city) => (
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
