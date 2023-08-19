import React from 'react'

const UserContext = React.createContext({

    name: '',
    setName: (name: string) => {},

})

export default UserContext