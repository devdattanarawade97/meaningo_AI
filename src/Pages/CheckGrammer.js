
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import './CheckGrammer.css'
function Checkgrammer(props) {



    return (

        <div className="checkgrammer-container">
            <Header></Header>
            <h2 className='heading'>Talk to AI English teacher & Get grammer feedback anytime anywhere</h2>
            <SearchBar functionName="checkgrammer" placeHolderValue={props.placeHolderName} buttonName="Ask"></SearchBar>
        </div>

    );
}

export default Checkgrammer;