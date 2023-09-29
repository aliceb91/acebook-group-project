import React from 'react';
import PhotoAlbum from "react-photo-album";

function Gallery({user, photos}) {

    return <PhotoAlbum layout="rows" photos={photos} />;
}


export default Gallery;