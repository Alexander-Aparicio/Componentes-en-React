import React,{ useState } from "react"
import Formulario from "./FormApp"
import TablaDeDatos from "./TablaDeDatos"

const baseDeDatos = [
    {id:1, web:"https://talleresonlineperu.com", tipo:"Blog",},
    {id:2, web:"https://suminidetalles.com", tipo:"Tienda",},
    {id:3, web:"https://pantalonetasdemoda.com", tipo:"Tienda",},
    {id:4, web:"https://blogueroweb.com", tipo:"Blog",},
    {id:5, web:"https://jonmircha.com", tipo:"Blog",}
]
const CrudApp = ()=>{

    const [db,setDb] = useState(baseDeDatos)
    const [modificacionData, setModificacionData] = useState(null)

    const createData = (data)=>{
        // Tenemos que crear un id para el resgitro de datos nuevo
        // por ello usamos Date.now() como alternativa (estapa de tiempo de cada segundo)
        data.id = Date.now()
        setDb([...db,data])
    }

    const updateData = (data)=>{
        let registroModificado = db.map(el=> el.id === data.id ? data:el)
        setDb(registroModificado)
    }

    const deleteData = (id)=>{
        let confirmDelete = window.confirm(`¿Estas seguro de eliminar el registro de id= ${id}?`)
        if(confirmDelete){
            let registroFiltrado = db.filter(el=> el.id !== id )
            setDb(registroFiltrado)
        }else{
            return
        }   
    }

    return(
        <div>
            <h3>----------------------------------------Crud-App---------------------------------------</h3>
            <Formulario createData={createData} updateData={updateData} modificacionData={modificacionData} setModificacionData={setModificacionData}/>
            <TablaDeDatos data={db} setModificacionData={setModificacionData} deleteData={deleteData}/>
        </div>
    )
}
export default CrudApp