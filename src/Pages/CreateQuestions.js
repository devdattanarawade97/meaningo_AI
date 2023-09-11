
import SearchBar from '../Components/SearchBar';
import Header from '../Components/Header';
import './LearnWithAI.css'
function LearnWithAI(props) {



    return (




        <div className="createquestions-container">
            <Header></Header>
            <h2 className='heading'>Create Questions, quizzes and MCQ's on any topic</h2>
            <SearchBar functionName="createquestions" placeHolderValue={props.placeHolderName} buttonName="Create" ></SearchBar>
        </div>
    )

}

export default LearnWithAI;