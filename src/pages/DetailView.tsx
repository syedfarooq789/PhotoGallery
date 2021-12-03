import { useState } from "react";
import { PhotoDetails } from "../interfaces/PhotoDetails";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DetailView = () => {
  const { state } = useLocation();
  const [photoDetails] = useState<PhotoDetails>(state);
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <Button variant="contained" role="backButton" onClick={goBack}>
        Go Back
      </Button>
      <div style={style.photoDetailContainer}>
        <Typography
          style={style.typography}
          variant="overline"
          display="block"
          gutterBottom
        >
          AlbumId : {photoDetails.albumId}
        </Typography>
        <Typography
          style={style.typography}
          variant="overline"
          display="block"
          gutterBottom
        >
          {photoDetails.title}
        </Typography>
        <Avatar
          alt={photoDetails.title}
          src={photoDetails.url}
          sx={style.avatar}
        />
      </div>
    </div>
  );
};

export default DetailView;

const style = {
  photoDetailContainer: {
    flex: 1,
    flexDirection: "column" as "column",
    alignSelf: "center",
    display: "flex",
  },
  avatar: {
    alignSelf: "center",
    width: "30%",
    height: "30%",
  },
  typography: {
    alignSelf: "center",
  },
};
