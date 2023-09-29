import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import PhotoAlbum from "../../components/photoAlbum/photoAlbum";
import NavbarPlaceholder from "../../components/navbarPlaceholder/navbarplaceholder";
import styles from './photogallery.module.css'

const Gallery = ({ navigate }) => {

    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [user, setUser] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [email, setEmail] = useState(window.sessionStorage.getItem("sessionUser"));

  useEffect(() => {
    if(token) {
      fetch(`/users?email=${encodeURIComponent(email)}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setUser(data.user);
          setPhotos(user.photoCollection.map((photo) => ({
            src: photo,
            width: 400,
            height: 300,
        })))
        photos.push({ src: user.profilePic, width: 400, height: 300 }) 
        })
    }
  }, [photos, user, token, setToken, setUser, setPhotos])


    return(
        <>
            <Navbar />
            <NavbarPlaceholder/>
            <h1 className={styles.galleryTitle}>Gallery</h1>
            <PhotoAlbum user = {user} photos = {photos}/>
        </>
    )
}

export default Gallery;