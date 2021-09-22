import logo from "../logo.jpg"; 

export default function Header (){
    return(
        <>
        <div><h1>Componentes con REACT</h1></div>
        <div><img src={logo} alt="Autor" className="App-logo"/></div>
        </>
    )
}