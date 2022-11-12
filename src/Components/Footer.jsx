import {BsFillPlusCircleFill} from'react-icons/bs'


const Footer = ({onAdd}) => {
  return (
    <footer style={{backgroundColor:'#beffbc'}}>
      MexDevs
        <BsFillPlusCircleFill style={{color:'white',cursor:'pointer'}} onClick={onAdd} />
    </footer>
  )
}

export default Footer