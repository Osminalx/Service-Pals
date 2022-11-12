import Button from './Button'

const Event = () => {
  return (
    <div>
        <div>
            <img src="https://img.freepik.com/fotos-premium/entorno-playa-sucia-basura-plastica_127090-1071.jpg" alt="Imagen" />
            <h2>Titulo</h2>
            <h6>Organizador: basuracorp</h6>
            <h6>Fecha</h6>
            <h6>12345678 Personas participando</h6>
            <p>Descripción</p>
            <Button color ={'blue'} text={'Join'} onClick={()=>console.log('yes')}/>
        </div>
    </div>
  )
}

export default Event