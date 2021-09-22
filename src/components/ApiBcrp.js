// import React from "react"
// import { peticionesApiRest } from "../helpers/helpHttp"

// const DatosBcrp = ()=>{

//     let peticion = peticionesApiRest()
//     let url = "https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PN01288PM-PN01289PM/json/2018-1/2019-9"
//     let options = {
//         "method": "GET",
//         "headers": {"cookie": "TBMCookie_5394288509503220116=283766001627704680T%2BB4CGZArU9d5u0n3b0WRuS1CoM%3D; ___utmvm=%23%23%23%23%23%23%23%23%23%23%23; PHPSESSID=nfn9brcqhhaq3crjj3buqqve6f5588ais55i0v5bmitncdmvub91"},
//         origin:"http://localhost:3000/",
//         mode:"no-cors"
//     }

//     peticion.Get(url,options).then((res)=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log(error)
//     })

//     return(
//         <h2>DATOS DEL BCRP</h2>
//     )
// }

// export {DatosBcrp}