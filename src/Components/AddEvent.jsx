import { useState } from "react"
import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';



const AddEvent = ({onAdd,handleClose, openval}) => {
  const [Titulo, setTitulo] = useState('')
  const [Organizador, setOrganizador] = useState('')
  const [Fecha, setFecha] = useState(Date())
  const [Descripcion, setDescripcion] = useState('')
  const [Hora,setHora]= useState('')

  const onSubmit =(e)=>{
    e.preventDefault()

    if(!Titulo || !Organizador || !Descripcion){
        alert('Por favor, rellene el formulario')
        return
    }
    alert('Una vez creado el evento, no se podrá borrar')
    onAdd({Titulo,Organizador,Fecha,Hora,Descripcion})

    setTitulo('')
    setOrganizador('')
    setFecha('')
    setHora('')
    setDescripcion('')
}

    return (
     <Modal
    open= {openval}
    onClose={handleClose}
    >
    <form onSubmit= {onSubmit}>
        <div>
            <label>Evento</label>
            <input type="text" placeholder="Titulo" value={Titulo} onChange={(e)=>setTitulo(e.target.value)}/>
        </div>
        <div>
            <label>Organizador</label>
            <input type="text" placeholder="Organizador" value={Organizador} onChange={(e)=>setOrganizador(e.target.value)} />   
        </div>
        <div>
            <label>Fecha</label>
            <input type="date" value={Fecha} onChange={(e)=>setFecha(e.target.value)} />
        </div>
        <div>
            <label>Hora del evento</label>
            <input type="time" name="Hora" value={Hora} onChange={(e)=>setHora(e.target.value)}/>
        </div>
        <div>
            <label>Descripción</label>
            <input type="text" placeholder="Descripción" value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
        </div>
        <input type='submit' value='Save Event' />
     </form>
     </ Modal>
  )
}

export default AddEvent