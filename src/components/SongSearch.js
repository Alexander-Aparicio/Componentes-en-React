import React, { useState, useEffect } from 'react'
import { peticionesApiRest } from '../helpers/helpHttp'
import { Loader } from './Loader'
import Respuesta from "./SongContent"
import FormBuscador from "./SongForm"


const BuscadorDeCanciones = ()=>{

    const [search, setSearch] = useState(null)
    const [cantante,setCantante] = useState(null)
    const [cancion,setCancion] = useState(null)
    const [loading, setLoading] = useState(false)
    const [negativeRes, setNegativeRes] = useState(false)

    const handleSearch = (data)=>{
        setSearch(data)
    } 

    useEffect(()=>{
        if(search === null) return

        const fechtData = async ()=>{
            const {artist, song} = await search

            let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
            let songUrl = `https://www.etnassoft.com/api/v1/get/?category=${song}`

            setLoading(true);

            // Creo dos variables donde se guardaran los valores de peticionesApiRest
            // el valor de peticionesApiRest().Get(artistUrl) se guarda en artistRes
            const [artistRes, songRes] = await Promise.all([
                peticionesApiRest().Get(artistUrl),
                peticionesApiRest().Get(songUrl)
            ])
            
            if(artistRes.artists !== null & songRes.length > 0){
                setCantante(artistRes)
                setCancion(songRes)
                setNegativeRes(false)
                setLoading(false)
            }else{
                setCantante(null)
                setCancion(null)
                setNegativeRes(true)
                setLoading(false)
            }  
        }

        fechtData()
    },[search])

return( 
    <div>
        <h2>Buscador de Canciones</h2>
        <FormBuscador handleSearch={handleSearch}/>
        {loading && <Loader/>}
        {search && !loading && (
            <Respuesta dataSinger={cantante} dataSong={cancion} negativeRes={negativeRes}/>
        )}
    </div> 
    )
}

export default BuscadorDeCanciones