import React from "react"
import Card from "../Cards"
import { useState, useEffect } from "react"
import getCity from "../../services/Event.js"
import {allCities} from "../../services/Events.js"
import ErrorCard from "../ErrorCard"
//Imports para redux
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import filterActions from "../../redux/actions/filter_action"
import citiesActions from "../../redux/actions/cities_action"

export default function Search() {
	const dipatch = useDispatch()
	const cities_reducer = useSelector((state) => state.cities_reducer.cities);
	const filter_reducer = useSelector((state) => state.filter_reducer.filter);

	const fetchData = async () => {
		try {
			if(filter_reducer.length != ""){
				const fetchedCity = await getCity(filter_reducer)
				dipatch(citiesActions.add_city({cities:fetchedCity}))
			}else{
				try {
					axios.get("http://localhost:3000/api/dbCities")
					.then((res) => {
						dipatch(citiesActions.add_city(res.data))
					})
				} catch (error) {
					console.log(error)
				}

			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleInput = () => {
		const search_input = document.getElementById("city-search")
		const input_value = search_input.value
		const value_without_space = input_value.toLowerCase().replace(/\s/g, "")
		dipatch(filterActions.modify_filter(value_without_space))
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
