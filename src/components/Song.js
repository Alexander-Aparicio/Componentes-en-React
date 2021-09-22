import React from "react"

const Cancion = ({dataSong})=> {
    
    return(
        <div>    
            {dataSong && dataSong.map((el)=><h4 key={el.ID} >{el.title}</h4>)}
        </div>
    )
}

export default Cancion