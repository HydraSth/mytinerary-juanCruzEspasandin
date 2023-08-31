import axios from 'axios';

export default async function getCity(name){
    try {
        const city = await axios.get(`http://localhost:3000/api/city?name=${name}`);
        return city.data.city;
    } catch (error) {
        console.log(error);
    }
};
