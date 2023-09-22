import axios from 'axios';

export default async function getCity(name){
    try {
        const city = await axios.get(`https://mytinerary.up.railway.app /api/city?name=${name}`);
        return city.data.city;
    } catch (error) {
        console.log(error);
    }
};
