import { LogicaForm } from "../hooks/useForm"
import styled from "styled-components"
import { Loader } from "./Loader"
import { MsjError } from "./MensajeError"

const MyForm = styled.form`
display:grid;
grid-template-columns: 0.5fr;
grid-template-rows: auto;
grid-row-gap:25px;
justify-content:center;
`
const MsjError1 = styled.p`
color:yellow;
margin-block: 0;
line-height:0;
margin-top:-7px;
` 
const initialForm ={
    name:"",
    email:"",
    subject:"",
    comments:"",
}

const validateForm = (form)=>{
    let errors={}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComment = /^.{1,255}$/;

    if(!form.name.trim()){errors.name = "El campo 'Nombre' es requerido."}else if(!regexName.test(form.name.trim())){errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco."}
    if(!form.email.trim()){errors.email = "El campo 'email' es requerido."}else if(!regexEmail.test(form.email.trim())){errors.email = "El campo 'email' solo acepta letras,- ,_ ,@ ,."}
    if(!form.subject.trim()){errors.subject = "El campo 'subject' es requerido."}
    if(!form.comments.trim()){errors.comments = "El campo 'comments' es requerido."}else if(!regexComment.test(form.comments.trim())){errors.comments = "El campo 'Comentarios' solo acepta hasta 250 caracteres."}
    return errors
}

const FormularioValid = ()=>{

    const {
        form,
        errores,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = LogicaForm(initialForm, validateForm)

    return(
        <div>
            <h2>FORMULARIO CON VALIDACIONES</h2>
            <MyForm onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} onBlur={handleBlur} required/>
                {errores.name && <MsjError1>{errores.name}</MsjError1>}
                <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} onBlur={handleBlur} required/>
                {errores.email && <MsjError1>{errores.email}</MsjError1>}
                <input type="subject" name="subject" placeholder="Asunto a tratar" value={form.subject} onChange={handleChange} onBlur={handleBlur} required/>
                {errores.subject && <MsjError1>{errores.subject}</MsjError1>}
                <textarea name="comments" cols="50" rows="5" placeholder="Texto" value={form.comments} onChange={handleChange} onBlur={handleBlur} required></textarea>
                {errores.comments && <MsjError1>{errores.comments}</MsjError1>}
                <input type="submit" value="Enviar"/>
            </MyForm>
            {loading && <Loader/>}
            {response && <MsjError msj={'Se envió con éxito'}/> }
            
        </div>
    )
}

export {FormularioValid}