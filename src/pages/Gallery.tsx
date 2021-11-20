import { useState, useEffect } from 'react';
import { GalleryState } from '../interfaces/GalleryState';
import {
    getPhotos,
} from "../model/JsonPlaceHolderApi";

const Gallery = () => {
    const [allValues, setAllValues] = useState<GalleryState>({
        photos: [],
        totalCount: 0,
        currentPage: 1
    });
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