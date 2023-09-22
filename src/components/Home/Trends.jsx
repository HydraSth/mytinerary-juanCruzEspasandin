import React, { useEffect, useState } from "react"
import Card from "../Cards"
import { useDispatch, useSelector } from "react-redux"
import citiesActions from "../../redux/actions/cities_action"

export default function Trends() {
	const [index, setIndex] = useState(0)
	const dispatch = useDispatch()
	const cities_reducer = useSelector((state) => state.cities_reducer).cities.slice(index, index + 4);

	const fetchData = async () => {
		dispatch(citiesActions.get_cities())
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
	}, [cities_reducer])

	const handlePrevCity = () => {
		index == 0 ? setIndex(8) : setIndex(index - 4)
	}
	const handleNextCity = () => {
		index == 8 ? setIndex(0) : setIndex(index + 4)
	}

	return (
		<>
			<div className="bg-theme dark:bg-dark-primary dark:text-dark-secondary pt-5">
				<h4 className="flex dark:text-dark-secondary place-content-center max-sm:text-xl md:mt-0 mb-0 font-semibold text-inverse-theme md:text-theme">
					Trending Mytinerarys
				</h4>
				<div className="flex mt-5 place-content-center">
					<button onClick={() => handlePrevCity()}>
							<i className="bi dark:text-dark-secondary text-inverse-theme md:text-theme bi-caret-left-fill"></i>
					</button>
					<div className="flex flex-wrap place-content-center w-3/4 gap-2">
						{cities_reducer.map((city) => (
							<Card
								key={`${city.name + Math.random()}`}
								name={`${city.name}`}
								photo={`${city.photo}`}
								country={`${city.country}`}
							/>
						))}
					</div>
					<button onClick={() => handleNextCity()}>
						<i className="bi dark:text-dark-secondary text-inverse-theme md:text-theme bi-caret-right-fill"></i>
					</button>
				</div>
			</div>
		</>
	)
}
