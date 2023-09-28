import React from 'react';
import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "https://images.unsplash.com/photo-1695648259930-920a1b92bfed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80", width: 800, height: 600 },
    { src: "https://images.unsplash.com/photo-1694392295383-75437a29ac91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3026&q=80", width: 1600, height: 900 },
    { src: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80", width: 400, height: 300 },
];  

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}