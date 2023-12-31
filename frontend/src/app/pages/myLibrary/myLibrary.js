import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import SteamGamesList from "../../components/store/SteamGamesList";
import NavbarPlaceholder from "../../components/navbarPlaceholder/navbarplaceholder";


const MyGameList = ({ navigate }) => {

    const [token, setToken] = useState(window.localStorage.getItem("token"))



    const logout = () => {
        window.localStorage.removeItem("token")
        navigator('/login')
    }

    if (token){
        return(
            <>
            <Navbar logout={logout}/>
            <NavbarPlaceholder/>
            <SteamGamesList/>
            <h1>Test</h1>
            </>
        )
    }



}

export default MyGameList