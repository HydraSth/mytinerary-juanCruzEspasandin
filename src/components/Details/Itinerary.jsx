import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import getIntineraries from "../../services/Itinerary"

export default function Itinerary({itinerary}) {	
	const [hashtags, setHashtags] = useState([])
    
    const ticketElements = [];

    for (let i = 0; i < itinerary.price; i++) {
        ticketElements.push(<i className="bi bi-cash"></i>);
    }

	useEffect(() => {
		if(itinerary){
			const individualHashtag=itinerary.hashtags.split(',')
			setHashtags(individualHashtag)
		}
	},[itinerary])

	return (
		<div className="flex flex-col basis-1/3" >
			<div
				id="card"
				className="bg-white h-64 mx-4 flex flex-col shadow-lg items-center rounded-t-xl"
			>
				<div
					className="h-1/2 w-full bg-cover bg-no-repeat bg-center rounded-t-2xl"
					style={{ backgroundImage: `url(${itinerary.photo})` }}
				>
					<section className="flex place-content-between text-sm">
						<q className="bi bi-clock text-inverse-theme/60 bg-white px-3 py-2 rounded-br-xl rounded-tl-xl">
							<span className="ms-1">{itinerary.duration}hrs</span>
						</q>
						<button className="justify-end bi bi-heart text-inverse-theme/60 bg-white px-3 py-2 rounded-bl-xl rounded-tr-xl">
							<span className="ms-1">{itinerary.likes}</span>
						</button>
					</section>
				</div>
				<article className="pt-2">
					<h2 className="font-semi-bold">{itinerary.name}</h2>
					<h3 className="font-medium opacity-40">
						{itinerary.author}
					</h3>
					<div className="flex w-fit px-1 gap-2 bg-green-50 text-green-600">
						<h3 className="font-medium">Price</h3>
						{
							ticketElements.map((ticket)=>{
								return <h3 key={Math.random()}>{ticket}</h3>
							})
						}
					</div>
					<section className="flex gap-2 mt-3">
						{
							hashtags.map((hashtag) => (
								<h3 key={hashtag} className="bg-inverse-theme/50 text-sm rounded-sm text-theme px-2 font-medium">
									{hashtag}
								</h3>
							))
						}
					</section>
				</article>
			</div>
			<div
				className="bg-primary rounded-b-xl mx-4 flex flex-col place-items-center "
				id="card"
			>
				<Link
					className="my-2 font-medium text-theme"
					to={"/itinerary/" + itinerary._id}
				>
					View more
				</Link>
			</div>
		</div>
	)
}
