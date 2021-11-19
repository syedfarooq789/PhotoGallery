import { useEffect } from "react";
import {
    getPhotos,
} from "../model/JsonPlaceHolderApi";

const Gallery = () => {
    useEffect(() => {
        getPhotoList();
    }, []);

    async function getPhotoList() {
        try {
            const photosList = await getPhotos();
        } catch (err) {
            console.log("cannnot fetch photos in gallery" + err);
        }
    }


    return (
        <div>

        </div>

    )
}

export default Gallery;