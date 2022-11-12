import Button from './Button'
import {useState} from 'react';


const Event = ({event,onDelete}) => {
  const[count,setCount] = useState(1);

  return (
    <>
        <div className="content">
            <img src="https://img.freepik.com/fotos-premium/entorno-playa-sucia-basura-plastica_127090-1071.jpg" alt="Imagen" />
            <h2>{event.Titulo}</h2>
            <h6>Organizador: ${event.Organizador}</h6>
            <h6>{event.Fecha}</h6>
            <p>{event.Hora}</p>
            <h6>{event.count}</h6>
            <p>{event.Descripcion}</p>
            <Button color ={count % 2 !== 0 ? 'green':'red'} text={count % 2 !== 0 ? 'Unirse': 'Salir'} onClick={()=> setCount(count + 1)}/>
        </div>
    </>
  )
}

export default Event