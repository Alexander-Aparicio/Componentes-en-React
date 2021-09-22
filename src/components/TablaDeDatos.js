import React from "react"
import styled from "styled-components"

// , {css, keyframes}
const MyTable = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "title title title"
    "urls tipos acciones";
    max-width:600px;
    margin:auto;
    margin-top: 30px;
    padding-bottom:30px;
    border: solid 0.7px #f4f4f4; 
    `

    const MyH3 = styled.h3`
    grid-area: title;
    color: #ffd700;
    `
    const MyH4 = styled.h4`
    border-bottom:solid 0.5px #f4f4f4;
    border-top:solid 0.5px #f4f4f4;
    `
    const Column =styled.section`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap:6px;
    justify-content:center;
    `
    const Enlace = styled.a`
    display:flex;
    height:35px;
    justify-content:center;
    align-items:center;
    `

    const Tipo = styled.p`
    display:flex;
    height:35px;
    justify-content:center;
    align-items:center;
    margin:0;
    `
    const ContainerBtn = styled.div`
    display:flex;
    height:35px;
    justify-content:center;
    align-items:center;
    margin:0;
    `

const TablaDeDatos = ({data,setModificacionData,deleteData})=>{

    return(
        <MyTable>
            <MyH3>Tabla de Registros</MyH3>
            <div>
                <Column>
                <MyH4>URL</MyH4>
                {data.length > 0 ? data.map((el)=> <Enlace key={el.id}>{el.web}</Enlace>):<Enlace>sin datos</Enlace>}
                </Column>
            </div>
            <div>
                <Column>
                <MyH4>Tipo</MyH4>
                {data.length > 0 ? data.map((el)=> <Tipo key={el.id}>{el.tipo}</Tipo>) :<Tipo>sin datos</Tipo>}
                </Column>
            </div>
            <div>
                <Column>
                <MyH4>Acciones</MyH4>
                {data.length > 0 ? data.map((el)=><ContainerBtn key={el.id}><button onClick={()=>setModificacionData(el)}>Editar</button><button onClick={()=>deleteData(el.id)} >Eliminar</button></ContainerBtn>) :<ContainerBtn><button>--</button><button>--</button></ContainerBtn>}
                </Column>
            </div>
        </MyTable>
    )
}

export default TablaDeDatos