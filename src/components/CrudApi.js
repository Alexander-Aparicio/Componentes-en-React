import React, { useState, useEffect } from 'react'
import Formulario from "./FormApp"
import TablaDeDatos from "./TablaDeDatos"
import {peticionesApiRest} from "../helpers/helpHttp"
import { Loader } from './Loader'
import { MsjError } from './MensajeError'

const CrudApi  = ()=>{

    const [db,setDb] = useState(null)
    const [modificacionData, setModificacionData] = useState(null)
    const [msj, setMsj] = useState(null)
    const [loading, setLoading] = useState(false)
    // Llamada a función para consumo de apiRest
    let peticion = peticionesApiRest()
    // Endpoint (url de a quíen le estamos haciendo la petición)
    let url = "http://localhost:5000/Sitios"

    // Usamos useEfect para traer los datos de la base de datos a través de la petición GET
    useEffect(()=>{
        setLoading(true)
        peticionesApiRest().Get(url).then((res)=> {
            
            if(!res.err){
                setDb(res)
                setMsj(null)
            }else{ 
                setDb(null)
                setMsj(res.status)
            }

            setLoading(false)
        })
    },[url])

    // data es un objeto que tiene la propiedades de los elementos del arreglo de la base de datos que estoy recibiendo
    // de un servidor.

    const createData = (data)=>{

        let options ={
            body:data,
            headers:{"content-type":"application/json"},
        }

        peticion.Post(url, options).then((res)=>{

            if(!res.err){
                setDb([...db,res])
            }else{
                setMsj(res.status)
            }
        })
        // Tenemos que crear un id para el resgitro de datos nuevo
        // por ello usamos Date.now() como alternativa (estapa de tiempo de cada segundo)
        data.id = Date.now()
        setDb([...db,data])
    }
    const updateData = (data)=>{

        let endpoint = `${url}/${data.id}`

        let options = {
            body:data,
            headers: {"content-type":"application/json"}
        }

        peticion.Put(endpoint,options).then((res)=>{
            if(!res.err){
                // data es el objeto que ya modifique en el formulario y estoy enviando a la base de datos
                // Cuando coincidan los id de uno de los objetos de la base de datos inicial con el id del objeto que estoy 
                // enviando se debe cambiar el elemento de la base de datos inicial por el enviado.
                let registroModificado = db.map(el=> el.id === data.id ? data:el)
                setDb(registroModificado)
            }else{
                setMsj(res)
            }
        })
    }
    // El parametro id es igual (el.id) , "el" es el elemento a eliminar pues desde la tabla de datos a través del evento click se envía la ejecución de la función
    // deleteDta(el.id)
    const deleteData = (id)=>{

        let confirmDelete = window.confirm(`¿Estas seguro de eliminar el registro de id= ${id}?`)
        if(confirmDelete){

            let endpoint = `${url}/${id}`
            let options = {
                headers:{"content-type":"application/json"}
            }

            peticion.Del(endpoint,options).then((res)=>{

            if(!res.err){

                let registroFiltrado = db.filter(el=> el.id !== id )
                setDb(registroFiltrado)
            }else{
                setMsj(res.status)
            }
        })
    
        }else{
            return
        }    
    }

    return(
        <div>
            <h2>Crud con JSON-Server</h2>
            <Formulario createData={createData} updateData={updateData} modificacionData={modificacionData} setModificacionData={setModificacionData}/>
            {loading && <Loader/>}
            {msj && <MsjError msj={`Error ${msj}`}/>}
            {db && <TablaDeDatos data={db} setModificacionData={setModificacionData} deleteData={deleteData}/>} 
        </div>
    )
}

export default CrudApi