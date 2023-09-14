import React from "react"

export default function NotLogged({itinerary}) {	

	return (
		<div className="flex flex-col basis-4/6 justify-center align-middle">
			<div id="card" className="bg-white h-64 mx-4 flex flex-col items-center rounded-t-xl place-content-center">
				<img src="./assets/signIn.svg" className="h-1/2"/>
				<h2 className="text-2xl text-inverse-theme font-bold">Sign in to view itineraries</h2>
				<p></p>
            </div>
		</div>
	)
}
