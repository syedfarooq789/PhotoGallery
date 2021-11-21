import { useState, useEffect } from 'react';
import { PhotoDetails } from '../interfaces/PhotoDetails';
import Avatar from '@mui/material/Avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const DetailView = () => {
    const { state } = useLocation();
    const photoDetailsIntialValue = {
        albumId: 0,
        id: 0,
        thumbnailUrl: '',
        title: '',
        url: '',
    }
    const [photoDetails, setPhotoDetails] = useState<PhotoDetails>(photoDetailsIntialValue);
    const navigate = useNavigate();
    useEffect(() => {
        setPhotoDetails(state);
    }, []);

    function goBack() {
        navigate(-1)
    }

    return (
        <div>
            <Button variant="contained" onClick={goBack}>Go Back</Button>
            <Avatar
                alt={photoDetails.title}
                src={photoDetails.url}
                sx={{ width: '50%', height: '50%' }}
            />
        </div>

    )
}

export default DetailView;
