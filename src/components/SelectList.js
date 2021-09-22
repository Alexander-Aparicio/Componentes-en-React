// import { useFetch } from "../hooks/useFetch"
// import { Loader } from "./Loader"
// import { MsjError } from "./MensajeError"

// const SelectList = ({title,url,handleChange})=>{

//     // useFetch es una función que retorna un objeto con los valores data, error y loading, estas propiedades
//     // las obtiene a partir de la petición fetch a una url, está url es el parametro de la useFetch

//     const {data,error,loading} = useFetch(url)

//     if(!data) return null

//     if(error){
//         return (
//             <MsjError msg={`Ocurrió un error ${error.status}: ${error.statusText}`}/>
//         )
//     }
//     let id = `select-${title}`
//     let label = title.charAt(0).toUpperCase()+title.slice(1)
//     // "response" es una propiedad  del objeto data, que contiene un objeto con una propiedad que contiene un arreglo con los datos que necesitamos
//     // title hace referencia a lo que estamos solicitando que puede ser estado, municipio o colonia (este arreglo contendra los datos de estas peticiones)
//     let options = data.response[title]
//     console.log(options)

//     return(
//         <>
//         <label htmlFor={id}>{label}</label>
//         {loading && <Loader/>}
//         {/* handleChange es una prop que ejecuta la función de cambio de estado con el parametro de valor igual a valor de input ,
//         es decir este tomará el valor del estado, municipio o colonia que selecionemos*/}
//         <select name={id} id={id} onChange={handleChange}>
//         <option value="">Elige un {title}</option>
//         {data && options.map((el)=> (<option key={el} value={el}>{el}</option>))}
//         </select>
//         </>
//     )
// }
// export {SelectList}