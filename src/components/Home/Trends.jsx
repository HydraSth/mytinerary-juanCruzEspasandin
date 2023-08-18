import React, { useEffect, useState } from "react"
import Card from "./Cards"
import { allCities } from "../../services/Events"
export default function Trends() {
	const [index, setIndex] = useState(0)
	const [actualCities, setActualCities] = useState([])
	const fetchData = async () => {
		try {
			const { cities } = await allCities()
			const primerasciudades = await cities.slice(index, index + 4)
			setActualCities(primerasciudades)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [index])

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextCity()
		}, 6000)

		return () => {
			clearInterval(interval)
		}
	}, [actualCities])

	const handlePrevCity = () => {
		index == 0 ? setIndex(8) : setIndex(index - 4)
	}
	const handleNextCity = () => {
		index == 8 ? setIndex(0) : setIndex(index + 4)
	}

	return (
		<>
			<div>
				<h4 className="flex place-content-center mb-0 font-semibold text-theme">
					Trending Mytinerarys
				</h4>
				<div className="flex mt-5 place-content-center">
					<div className="flex flex-wrap lg:w-full place-content-center w-3/4">
						<button onClick={() => handlePrevCity()}>
							<i className="bi text-theme bi-caret-left-fill"></i>
						</button>
						{actualCities.map((city) => (
							<Card
								key={`${city.name + Math.random()}`}
								name={`${city.name}`}
								photo={`${city.photo}`}
							/>
						))}
						<button onClick={() => handleNextCity()}>
							<i className="bi text-theme bi-caret-right-fill"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
