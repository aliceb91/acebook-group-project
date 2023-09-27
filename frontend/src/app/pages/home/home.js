import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSideBar";
import SteamNewsList from "../../components/steamnewslist/SteamNewsList";
import Submit from "../../components/submit/submit";
import styles from "./home.module.css"
import Friends from "../../components/friends/friends";

const Home = ({ navigate }) => {
  
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  
  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  if(token) {
    return(
      <>
        <Navbar logout={logout}/>
        <div className={styles.homepage}>
          <h1>GameBook</h1>
          <Submit setPosts={setPosts} token={token} setToken={setToken}/>
          <div className={styles.content}>
            <Friends />
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