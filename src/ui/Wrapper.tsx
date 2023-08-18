import React from "react";

function Wrapper({children, width, height, padding}: {children: React.ReactNode, width: string, height: string, padding?: string}) {
    return (
        <div className="wrapper" style={{width, height, padding}}>
            {children}
        </div>
    )
}

export default Wrapper;