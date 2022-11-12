import PropTypes from 'prop-types';


const Bttn=({color, text, onClick,})=>{

    return(
        <button onClick={onClick} syle ={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

// Button.defaultProps = {
    
// }

Bttn.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired,

}
export default Bttn