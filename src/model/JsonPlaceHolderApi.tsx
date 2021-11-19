import axios from "axios";
const JSON_PLACEHOLDER_API_ENDPOINT = "https://jsonplaceholder.typicode.com/";

export const getPhotos = async () => {
    try {
        const photoList = await axios.get(JSON_PLACEHOLDER_API_ENDPOINT + 'photos');
        return photoList.data;
    } catch (err) {
        console.log("get photos error:", err);
    }
}