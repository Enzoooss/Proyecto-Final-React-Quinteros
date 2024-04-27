import { Button, TextField } from "@mui/material"
import { useState } from "react"

export const Checkout = () => {

    const [info, setInfo] = useState({
        nombre:"",
        telefono:"",
        email:"",
    })


    // const [nombre, setNombre] = useState("")
    // const [telefono, setTelefono] = useState("")
    // const [email, setEmail] = useState("")
    
    const handleChange = (event)=>{
        let {name, value} = event.target
        

        setInfo({...info, [name]: value})
    }
    
    
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log(event) lo que yo quiera hacer con el formulario
        console.log(info);
    }


return (
    <div style={{padding: "100px"}}>
        <form onSubmit={handleSubmit}>
            <TextField variant="outlined" type="text" label="nombre" onChange={handleChange} name="nombre"/>
            <TextField variant="outlined" type="text" label="telefono" onChange={handleChange} name="telefono" />
            <TextField variant="outlined" type="text" label="email" onChange={handleChange} name="email"/>
            <Button variant="contained">Enviar</Button>
        </form>

    </div>
  )
}
