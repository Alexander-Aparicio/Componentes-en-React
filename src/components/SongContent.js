import React from 'react'
import Cancion from "./Song"
import ArtistaEncontrado from "./SongArtist"
import styled from "styled-components"
import { MsjError } from './MensajeError'

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
    grid-gap: 20px;
    justify-content: center;
`
const Respuesta =({dataSinger,dataSong,negativeRes})=>{
    
    return(
        <div>  
            {negativeRes === true ? (
                <MsjError msj={`No se encontró resultados con la conincidencia solicitada`}/>
            ):(
                <Container>
                <ArtistaEncontrado dataSinger={dataSinger}/>
                <Cancion dataSong={dataSong}/>
                </Container>
            )}
 
        </div>
    )
}

export default Respuesta
