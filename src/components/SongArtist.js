import React from "react"

const ArtistaEncontrado = ({dataSinger})=>{
    
    return(
        <div>
            {dataSinger && <div><h4>{dataSinger.artists[0].strArtist}</h4>
            <img src={dataSinger.artists[0].strArtistClearart} alt={dataSinger.artists[0].strArtist}/>
            <p>{dataSinger.artists[0].strBiographyEN}</p></div> 
            }           
        </div>
    )
}

export default ArtistaEncontrado