import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
// import Post from "../../components/post/Post";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSideBar";
import SteamGamesList from "../../components/steamgameslist/SteamGamesList";
import Submit from "../../components/submit/submit";
import "./home.css"
import Friends from "../../components/friends/friends";
import AddFriend from "../../components/addfriend/addfriend";

const Home = ({ navigate }) => {
  
  // const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  // useEffect(() => {
  //   if(token) {
  //     fetch("/posts", {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(async data => {
  //         window.localStorage.setItem("token", data.token)
  //         setToken(window.localStorage.getItem("token"))
  //         setPosts(data.posts);
  //       })
  //   }
  // }, [])
    

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  if(token) {
    return(
      <>
        <Navbar logout={logout}/>
        <div id="homepage">
          <h1>GameBook</h1>
          <Submit token={token} setToken={setToken}/>
          <div id="content">
            <Friends token={token} setToken={setToken}/>
            <Feed logout={logout} token={token} setToken={setToken}/>
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