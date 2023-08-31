import React from "react"

export default function EmptyItinerary({itinerary}) {	

	return (
		<div className="flex flex-col basis-4/6 justify-center align-middle">
			<div id="card" className="bg-white h-64 mx-4 flex flex-col items-center rounded-t-xl place-content-center">
				<img src="./assets/landscape-error.png" className="h-1/2"/>
				<h2 className="text-2xl text-inverse-theme font-bold">You've found the forest of the elves!</h2>
				<h3 className="text-inverse-theme/60">Unfortunately, no itineraries are currently available.</h3>
				<p></p>
            </div>
		</div>
	)
}
