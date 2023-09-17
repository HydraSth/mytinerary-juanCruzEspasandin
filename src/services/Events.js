import axios from 'axios';

export const allCities = async () => {
    try {
        const response = await axios.get("https://mytinerary.up.railway.app/api/dbCities");
        return response.data.cities;
    } catch (error) {
        console.log(error);
    }
};
