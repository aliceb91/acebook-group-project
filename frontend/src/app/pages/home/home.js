import React, { useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import NavbarItem from "../../components/navbar/navbarItem.js";
import DropdownElement from '../../components/dropdownElement/dropdownElement.js'
import { ReactComponent as PlusIcon } from '../../../images/plus.svg';
import IconMenu from "../../components/dropdown/MuiDropdown.js";
import Post from "../../components/post/Post";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSideBar";

const Home = ({ navigate }) => {
  
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if(token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setPosts(data.posts);
        })
    }
  }, [])
    

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  if(token) {
    return(
      <>
      <Navbar>
        <NavbarItem icon='🏠' link='/home'/>
        <NavbarItem icon= {<PlusIcon />} link='/signup'>
            <p>Sign Up</p>
        </NavbarItem>
      </Navbar>
      <h1>Test home</h1>
      <IconMenu />
        <Feed posts={posts} logout={logout}/>
        {<RightSidebar />}
      
      </>
    )
  } else {
    navigate('/login')
  }
}

export default Home;