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
        getPhotoList(allValues.currentPage);
    }, []);

    async function getPhotoList(pageNumber: number) {
        try {
            const photosApiResponse = await getPhotos(pageNumber);
            setAllValues({
                photos: photosApiResponse!!.data,
                totalCount: parseInt(photosApiResponse!!.headers['x-total-count']),
                currentPage: pageNumber
            });

        } catch (err) {
            console.log('cannnot fetch photos in gallery' + err);
        }
    }


    return (
        <div>

        </div>

    )
}

export default Gallery;