import React from "react"

const MsjError = ({msj})=>{

    let styles = {
        color: "#ffd700",
    }
    return(
        <div style ={styles}>
            <h2>{msj}</h2>
        </div>
    )
}

export {MsjError}