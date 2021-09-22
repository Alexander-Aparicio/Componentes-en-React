import { useState } from 'react';
import { peticionesApiRest } from '../helpers/helpHttp';

const LogicaForm = (initialForm, validateForm)=>{

    const [form, setForm] = useState(initialForm)
    const [errores, setErrores] = useState({})
    const [loading,setLoading]=useState(false)
    const [response, setResponse] = useState(null)

    const handleChange = (e)=>{

        const {name,value}= e.target
        setForm({
            ...form,
            [name]:value,
        })
    }
    const handleBlur = (e)=>{
        handleChange(e)
        setErrores(validateForm(form))
    }  
    const handleSubmit = (e)=>{
        e.preventDefault()
        // Nuevamente set Errores para que se siga  visualizando los mensajes de error si el usuario presiona enviar
        setErrores(validateForm(form))
        if(Object.keys(errores).length === 0){
            alert('Se va enviar los datos')
            setLoading(true)
            peticionesApiRest().Post('https://formsubmit.co/ajax/alexdel2019@gmail.com',{
                body:form,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                }
            }).then((res)=>{
                setLoading(false)
                setResponse(true)
                setForm(initialForm)
                setTimeout(() => {
                    setResponse(false)
                }, 2000);
            })
        }else{
            return
        }

    }

    return({
        form,
        errores,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    })
}

export {LogicaForm}