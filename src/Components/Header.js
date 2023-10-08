import './Header.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    // <a href="https://www.buymeacoffee.com/meaningo" className="links" target='blank'>Donate</a>
    return (

        <div className='heading-container' class='navbar'>

            <div className="link-container">
                <nav className='bg-black nav navbar-dark'>
                <Link className="links" to="/home">Home</Link>
                <Link className="links" to="/learn">Learn with AI Teacher</Link>
                <Link className="links" to="/chatbot">AI Chatbot 🤖</Link>
                <Link className="links" to="/generatequestions">Create Questions</Link>
                <Link className="links" to="/learnenglish">AI English Tutor</Link>
                <a href="https://www.paypal.com/paypalme/deva9078" className="links" target='blank'>Donate</a>
                <a href="mailto:service@meaningo.co.in" className="links" target='blank'>Write us</a>
                </nav>
             


            </div>
        </div>
    )
}

export default Header;