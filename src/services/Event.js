import axios from 'axios';

export const Citie = async (name) => {
    try {
        const city = await axios.get(`http://localhost:3000/api/city?name=${name}`);
        return city.data.city;
    } catch (error) {
        console.log(error);
    }
};
