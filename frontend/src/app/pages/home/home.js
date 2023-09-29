import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSideBar";
import SteamNewsList from "../../components/steamnewslist/SteamNewsList";
import Submit from "../../components/submit/submit";
import styles from "./home.module.css"
import Friends from "../../components/friends/friends";
import ProfilePic from "../../components/profilePic/profilePic";
import PhotoAlbum from "../../components/photoAlbum/photoAlbum";
import AddFriend from "../../components/addfriend/addfriend";

const Home = ({ navigate }) => {
  
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if(token) {
      fetch("/users/home", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setUser(data.user);
        })
    }
  }, [token, setToken, setUser])
  
  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  if(token) {
    return(
      <>
        <Navbar logout={logout} user = {user}/>
        <div id='homepagae' className={styles.homepage}>
          <h1>GameBook {user.username}</h1>
          <Submit setPosts={setPosts} token={token} setToken={setToken}/>
          <div id='homepage-content' className={styles.content}>
            <Friends token={token} setToken={setToken}/>
            <Feed posts={posts} setPosts={setPosts} logout={logout} token={token} setToken={setToken}/>
            {<RightSidebar />}
            
          </div>
        </div>
      </>
    )
  } else {
    navigate('/login')
  }
}

export default Home;