import React from "react";
import { Outlet } from "react-router";
import '../App.css';
import UserProvider from "../context/UserContext/UserProvider";

function Root() {
    return (
        <div className="App">
            <UserProvider>
                <Outlet/>
            </UserProvider>
        </div>
    )
}

export default Root;