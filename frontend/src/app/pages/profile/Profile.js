import React, {useState, useEffect} from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/navbar';
import styles from  './Profile.module.css';
import Friends from '../../components/friends/friends';
import RightSidebar from '../../components/rightsidebar/RightSideBar';
import Post from '../../components/post/Post';

const Profile = ({ sessionUser, navigate }) => {

  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [posts, setPosts] = useState([])
  const [email, setEmail] = useState(window.sessionStorage.getItem("sessionUser"));
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] =  useState("");
  const [lastName, setLastName] = useState("");

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  useEffect(() => {
    if(token) {
      fetch(`/users?email=${encodeURIComponent(email)}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setUsername(data.username);
        setFirstName(data.firstName);
        setLastName(data.LastName);
      })
      .then((data) => {
        fetch(`/posts?creator=${username}`, {
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
      })
    }
  })

  if(token) {
    return(
      <>
        <Navbar logout={logout} />
        <div className={styles.profilePage}>
          <h1>Your Profile</h1>
          <div className={styles.profileContent}>
            <Friends />
            <div className={styles.profileInfo}>
              <h1>Profile Info:</h1>
              <div>Username: {username}</div>
              <div>First Name: {firstName}</div>
              <div>Last Name: {lastName}</div>
              <div>Email: {email}</div>
              <div className={styles.userFeed}>
                <h1>Your Posts:</h1>
                <div role="feed">
                  {posts.map(
                    (post) => ( <Post token={token} setPosts = {setPosts} setToken={setToken} post={ post } key={ post._id } comments={post.comments} feedVar={username}/> )
                  )}
                </div>
              </div>
            </div>
            <RightSidebar />
          </div>
        </div>
      </>
    )
  } else {
    navigate('/login')
  }
}

export default Profile;