import React, { useState} from 'react';

const initialForm ={
    artist:""
}

const FormBuscador = ({handleSearch})=>{

    const [form, setForm] = useState(initialForm)

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!form.artist ){
            alert("Datos incompletos")
            return
        }
        // Esta función lo que esta haciendo es lograr afectar al padre mediante el cambio de la variable de estado
        // esto dado que handleSearch es una función que ejecuta la función setSearch con el parametro form que
        // contiene los valores de los input que hacen referencia a la búsqueda del artista y canción 
        handleSearch(form)
        setForm(initialForm)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Artitsta" name="artist" onChange={handleChange} value={form.artist}/>
                {/* <input type="text" placeholder="Canción" name="song" onChange={handleChange} value={form.song}/> */}
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
    // song:""
    // || !form.song
}

export default FormBuscador