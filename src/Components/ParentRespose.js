
import UserInput from "./UserInput"
import Response from "./Response"
import SearchBar from "./SearchBar";


function ParentResponse(props){


    return [
        <UserInput enteredInput={props.InputValue}></UserInput>,
        <Response output={props.OutputValue} spinnerShow={props.spinnerStatus}></Response>
    ]
}

export default ParentResponse;