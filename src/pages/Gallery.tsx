import { useState, useEffect } from 'react';
import { GalleryState } from '../interfaces/GalleryState';
import {
    getPhotos,
} from '../model/JsonPlaceHolderApi';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {allValues.photos.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </div>

    )
}

export default Gallery;