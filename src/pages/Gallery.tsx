import { useState, useEffect } from "react";
import { GalleryState } from "../interfaces/GalleryState";
import { getPhotos } from "../model/JsonPlaceHolderApi";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListPagination from "../components/ListPagination";
import { PhotoDetails } from "../interfaces/PhotoDetails";
import { useNavigate, useParams } from "react-router-dom";

const Gallery = () => {
  const pageLimit = 10;
  const { pageNumber } = useParams<string>();
  const navigate = useNavigate();
  const [allValues, setAllValues] = useState<GalleryState>({
    photos: [],
    totalCount: 0,
    currentPage: 1,
  });

  useEffect(() => {
    getPhotoList(parseInt(pageNumber!!));
  }, [pageNumber]);

  async function getPhotoList(pageNumber: number) {
    try {
      const photosApiResponse = await getPhotos(pageNumber, pageLimit);
      setAllValues({
        photos: photosApiResponse!!.data,
        totalCount: parseInt(photosApiResponse!!.headers["x-total-count"]),
        currentPage: pageNumber,
      });
    } catch (err) {
      console.log("cannnot fetch photos in gallery" + err);
    }
  }

  function handleItemListClick(item: PhotoDetails) {
    navigate("/details", { state: item });
  }

  return (
    <div style={style.imageListContainer}>
      <ImageList sx={style.imageList} cols={3} rowHeight={164}>
        {allValues.photos.map((item) => (
          <ImageListItem
            key={item.id}
            onClick={() => handleItemListClick(item)}
          >
            <img
              src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ListPagination
        totalCount={allValues.totalCount}
        currentPage={allValues.currentPage}
        siblingCount={1}
        pageSize={pageLimit}
      ></ListPagination>
    </div>
  );
};

export default Gallery;

const style = {
  imageListContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as "column",
  },
  imageList: {
    alignSelf: "center",
    minWidth: 500,
    minHeight: 550,
  },
};
