// import React, { useState } from 'react'
// import { SelectList } from './SelectList'
// import styled from 'styled-components'

// const FormSelect = styled.div`
// display: grid;
// grid-template-columns:0.5fr;
// grid-template-rows: auto;
// justify-content:center;
// grid-row-gap: 20px;
// `

// const SelectAnidado = ()=>{

//     const [state, setState] = useState("")
//     const [town, setTown] = useState("")
//     const [suburb, setSuburb] = useState("")

//     const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c"

//     const URLESTADO = `https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`
//     const URLMUNICIPIO = `https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`
//     const URLCOLONIA = `https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`


//     return(
//         <FormSelect>
//             <h2>México</h2>

//             <SelectList title="estado" url={`${URLESTADO}`} handleChange={(e)=>setState(e.target.value)}/>

//             {state && (<SelectList title="municipios" url={`${URLMUNICIPIO}`} handleChange={(e)=>setTown(e.target.value)}/>)}
            
//             {town && (<SelectList title="colonia" url={`${URLCOLONIA}`} handleChange={(e)=>setSuburb(e.target.value)}/>)}

//             <pre>
//                 <code>{state} - {town} - {suburb}</code>
//             </pre>
            
//         </FormSelect>
//     )
// }

// export default SelectAnidado