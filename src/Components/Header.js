import './Header.css';
import { Link } from "react-router-dom";
function Header() {

    // <a href="https://www.buymeacoffee.com/meaningo" className="links" target='blank'>Donate</a>
    return (

        <div className='heading-container'>

            <div className="link-container">

                <Link className="links" to="/home">Home</Link>
                <Link className="links" to="/learn">Learn with AI Teacher</Link>
                <Link className="links" to="/chatbot">AI Chatbot 🤖</Link>
                <Link className="links" to="/generatequestions">Create Questions</Link>
                <Link className="links" to="/learnenglish">AI English Tutor</Link>
                <a href="mailto:service@meaningo.co.in" className="links" target='blank'>Write us</a>


            </div>
        </div>
    )
}

export default Header;