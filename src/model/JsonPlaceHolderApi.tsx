import axios from 'axios';
const JSON_PLACEHOLDER_API_ENDPOINT = `https://jsonplaceholder.typicode.com/`;

export const getPhotos = async (pageNumber: number) => {
    try {
        const photoList = await axios.get(JSON_PLACEHOLDER_API_ENDPOINT + `photos?_page=${pageNumber}`);
        return photoList;
    } catch (err) {
        console.log("get photos error:", err);
    }
}