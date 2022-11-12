import PropTypes from 'prop-types';


const Button=({color, text, onClick,})=>{

    return(
        <button onClick={onClick} syle ={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

// Button.defaultProps = {
    
// }

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired,

}
export default Button