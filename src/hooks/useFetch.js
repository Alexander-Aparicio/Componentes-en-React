// import { useState, useEffect } from 'react'
// // Se crea este Hok personalizado para hacer las peticiones fetch con el fin de reutilzar este componente y 
// // no escribir mas código innecesario
// const useFetch = (url) =>{

//     const [data,setData] = useState(null)
//     const [error,setError] = useState(null)
//     const [loading,setLoading] = useState(false)

//     useEffect(()=>{

//         // Creamos la variable abortController para crear un new object AbortController()
//         // y utilizar su propiedad signal que nos permite cancelar la petición despues de un
//         // tiempo si es que el servidor no responde, esto para evitar un loader permanente. 
//         const abortController = new AbortController()
//         const signal = abortController.signal

//         const fetchData = async ()=>{

//             setLoading(true)

//             try{
//                 const res = await fetch(url, {signal})

//                 if(!res.ok){
//                     let err = new Error("Error en la petición");
//                     err.status = res.status || "00"
//                     err.statusText = res.statusText || "Ocurrió un error"
//                     throw err
//                     // Con throw se envía el objeto "err" al catch , el parametro error toma el valor de err
//                 }

//                 const json = await res.json()
//                 // Si existe la propiedad aborted en signal es true  quiere decir que se ejecuta la cancelación
//                 // Si es false por la negación (!) se convierte en "true" y se aplica la condicional (if): efectuar el cambio de estado de la variable de estado data
//                 // por las respuesta de la petición.
//                 if(!signal.aborted){
//                     setData(json)
//                     setError(null)
//                 }

//             }catch(error){
//                 // Con throw se envía el objeto "err" al catch , el parametro error toma el valor de err
//                 if(!signal.aborted){
//                     setData(null)
//                     setError(error)
//                 }

//             }finally{

//                 if(!signal.aborted){
//                     setLoading(false)
//                 }

//             }

//         }
//         fetchData()

//         return () => abortController.abort()

//     }, [url])

//     return {data, error, loading}
// }

// export {useFetch}