export const peticionesApiRest = ()=>{

    const recursosDePeticion = (endpoint, options)=>{

        const defaultHeader = {
            // Los datos a enviar, solicitar o editar deben ser en formato json
            accept: "application/json",
        }
        // Para poder cancelar la petición en caso el servidor tenga algún problema y
        // y la respuesta este demorando demasiado o no lo pueda dar pero nos mantiene en espera
        const controller = new AbortController()
        // options es un objeto al cual le asignamos una propiedad signal igual a la propiedad signal del objeto AbortController,
        // con esto logramos pasarle a las options una propiedad que nos permite usar AbortController para cancelar la petición a través del
        // metodo abort()
        options.signal = controller.signal
        options.method = options.method || "Get"
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader
        // Podemos recibir datos o tener datos que debemos enviar en un formato distinto de json por ello transformamos
        // a través del metodo JSON.stringify a formato json.
        // Cuando hacemos una petición GET no envía data solo se recibe data entonces el body no existe es null pero
        // no podemos enviar un body con valor null entonces lo que se debe hacer es eliminar esta propiedad  del objeto options
        // para ello utilizamos el operador corto circuito || para cuando tenga valor null tome el valor false que tampoco se puede enviar pero
        // nos servirá para eliminar esta propiedad con un condicional y el metodo delete (se usa para eliminar propiedades de un objeto)
        options.body = JSON.stringify(options.body) || false
        if(!options.body)delete options.body
        console.log(options)
        // Establecemos 3 seg como máximo para esperar una respuesta del servidor , luego de ello a través de controller y el metodo abort cancelamos
        // la petición
        setTimeout(() => {
            controller.abort()
        }, 5000);

        return fetch(endpoint, options)
        .then((res)=> res.ok 
            ? res.json() 
            : Promise.reject({
                // Si la propiedad ok es false entonces se rechaza la promesa y se genera un objeto
                // con información sobre el error
                err:true,
                status: res.status || "00",
                statusText: res.statusText ||"Ocurrió un error",
            })
        )
        .catch((err)=> err)
    }

    const Get = (url, options={})=> recursosDePeticion(url,options)

    const Post = (url,options={})=>{
        options.method = "POST"
        return recursosDePeticion(url, options)
    }

    const Del = (url,options={})=>{
        options.method = "DELETE"
        return recursosDePeticion(url, options)
    }
    
    const Put = (url,options={})=>{
        options.method = "PUT"
        return recursosDePeticion(url, options)
    }

    return {
        Get,
        Post,
        Del,
        Put,
    }
} 