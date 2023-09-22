import axios from 'axios';

export default async function getIntineraries(name){
    try {
        const itinerary = await axios.get(`https://mytinerary.up.railway.app/api/cityItineraries?name=${name}`);
        return itinerary.data.itineraries;
    } catch (error) {
        console.log(error);
    }
};
