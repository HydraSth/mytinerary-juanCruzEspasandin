import axios from 'axios';

export const allCities = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/dbCities");
        return response.data.cities;
    } catch (error) {
        console.log(error);
    }
};
