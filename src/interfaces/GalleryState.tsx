import { PhotoDetails } from './PhotoDetails';

export interface GalleryState {
    photos: PhotoDetails[],
    totalCount: number,
    currentPage: number

}