import React, { useState, useEffect } from "react"

const RegistroInicial = {
    web: "",
    tipo: "",
    id: null,
}

const Formulario = ({createData, updateData, modificacionData, setModificacionData})=>{

    const [registros, setRegistros] = useState(RegistroInicial) 

    // Si hacemos click en el botón editar,se aplica la función : functionModificacionState con un parametro que viene a ser
    // el objeto elemento  (un registro) del conjunto de registros. Este objeto tiene las mismas propiedades del registro inicial.
    
    useEffect(()=>{
        if(modificacionData){
            console.log(modificacionData)
            // stateModificacion viene a ser un objeto con las propiedades de un registro que fue seleccionado con un click.
            setRegistros(modificacionData)
            // con esto el estado registros toma los valores del objeto stateModification, y los valores de las ´propiedades web y tipo pasan a visualizarse
            // en el formulario debido a que el atributo value de estos inputs toman los valores del estado resgitro (objeto registros)
        }else{
            setRegistros(RegistroInicial)
        }
    },[modificacionData])
    //  Los eventos estarán relacionados con la variable de estado para ello
    // Creamos funciones que nos permitiran controlar los eventos.
    const handleChange = (e)=>{
        setRegistros({
            ...registros,
            [e.target.name]:e.target.value,
            // [e.target.name] toma tres valores: web, tipo o id. Por ejm: al llenar el input url le estamos dando ese valor a la propiedad web.
            // Si los datos que se encuentran en los inputs provienen del registro tendrán un [e.target.name] = id con un valor distinto de null.
            // Si los datos son nuevos o no provenientes del registro tendrán un [e.target.name] = id con un valor null(valor por defecto).
        })
    } 
    //El objeto que se crea con la función setRegistros (variable de estado llamada registro) sirve para determinar que acción se tomará en el evento submit. 
    const handleSubmit = (e)=>{
        e.preventDefault()
        // validación básica para que el formulario no se envié incompleto
        if(!registros.tipo || !registros.web){
            alert("Falta llenar datos")
            return;
        }
        // Condicional para invocar la función de enviar datos o editar (actualizar) datos del registro.
        if(registros.id === null){
        // Si al aplicar el evento submit el valor de la propiedad id ([e.target.name]) es igual nulll invocaremos la función de crear datos nuevos para el registro.
            createData(registros)
        }else{
            updateData(registros)
        }
        handleReset()
    }
    // La función handleReset nos permite regresar al estado inicial el objeto que representa el estado de resgitro y el de modificación  
    const handleReset = ()=>{
        setRegistros(RegistroInicial)
        setModificacionData(null)
    } 
    
    return(
        <div>
            <h3>Agregar Webs</h3>
            <form onSubmit={handleSubmit}>
                {/* Value es el valor que enviaremos hacia la base de datos */}

                <input 
                type="text" 
                name="web" 
                placeholder="Url de la web" 
                onChange={handleChange} 
                value={registros.web} />

                <input 
                type="text" 
                name="tipo" 
                placeholder="Tipo de web" 
                onChange={handleChange} 
                value={registros.tipo}/>

                <input 
                type="submit" 
                value={registros.id ? "Editar":"Agregar"} 
                onSubmit={handleSubmit}/>

                <input 
                type="reset" 
                value="Limpiar" 
                onClick={handleReset}/>

            </form>
        </div>
    )
}

export default Formulario