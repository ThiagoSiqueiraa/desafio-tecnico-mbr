import React from "react"
import { useState } from "react"
import UserContext from "./UserContext"

const UserProvider = (props: any) => {
    const [user, setUser] = useState('')

    return(
        <UserContext.Provider value={{
            name: user,
            setName: (name: string) => {setUser(name)}
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider