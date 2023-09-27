import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import styles from "./store.module.css"
import SteamGamesList from "../../components/store/SteamGamesList";


const Store = ({ navigate }) => {

    const [token, setToken] = useState(window.localStorage.getItem("token"))



    const logout = () => {
        window.localStorage.removeItem("token")
        navigator('/login')
    }

    if (token){
        return(
            <>
            <Navbar logout={logout}/>
            <SteamGamesList/>
            <h1>Test</h1>
            </>
        )
    }



}

export default Store