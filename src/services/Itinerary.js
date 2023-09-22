import axios from 'axios';

export default async function getIntineraries(name){
    try {
        const itinerary = await axios.get(`http://localhost:3000/api/cityItineraries?name=${name}`);
        return itinerary.data.itineraries;
    } catch (error) {
        console.log(error);
    }
};
