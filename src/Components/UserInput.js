import './UserInput.css'
function UserInput(props) {

    const userQuery = "Your response : " + props.enteredInput
    return (

        <div className="input-container">
            <div className="input-value">{userQuery}</div>
        </div>

    )
}

export default UserInput;