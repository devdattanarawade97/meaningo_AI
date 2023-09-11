import './Response.css'
import Typewriter from './TypeWritter';
import spinner from './spinner.gif';
function Response(props) {

    const responseData = "Meaningo AI Teacher : " + props.output;
    return (

        <div className="output-container">
            {props.spinnerShow ? <img src={spinner} alt='spinner' className='spinner'></img> : <div className='output'><Typewriter respond={responseData}></Typewriter></div>}

        </div>
    )
}

export default Response;    