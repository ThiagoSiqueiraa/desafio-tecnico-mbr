import React from "react";
import { Outlet } from "react-router";
import '../App.css';

function Root() {
    return (
        <div className="App">
            <Outlet />
        </div>
    )
}

export default Root;