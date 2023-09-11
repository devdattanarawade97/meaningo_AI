
import SearchBar from '../Components/SearchBar';
import Header from '../Components/Header';
import './LearnWithAI.css'
function LearnWithAI(props) {



    return (




        <div className="learnwithai-container">
            <Header></Header>
            <h2 className='heading'>Learn Anything with AI Teacher. Ask anything anytime</h2>
            <SearchBar functionName="learnwithai" placeHolderValue={props.placeHolderName} buttonName="Ask"></SearchBar>
        </div>
    )

}

export default LearnWithAI;