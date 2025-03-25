import React from "react";

export default function LayoutBasic(props) {
    const {children} = props
    return (
        <div style={{backgroundColor:"blue"}}>
            <div>Menu TOP</div>
            <div>{children}</div>
        </div>
    )
}