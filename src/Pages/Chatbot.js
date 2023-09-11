
import SearchBar from '../Components/SearchBar';
import Header from '../Components/Header';
import './Chatbot.css'
function Chatbot(props) {

  
    return (

        <div className="chatbot-container">
            <Header></Header>
            <h2 className='heading'>Feeling bored ? Chat with AI Chatbot</h2>
            <SearchBar functionName="chatbot" placeHolderValue={props.placeHolderName} buttonName="Send"></SearchBar>
        </div>
    );
}

export default Chatbot;