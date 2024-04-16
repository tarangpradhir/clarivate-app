import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const ButtonContainer: React.FC = () => {
    const location = useLocation();

    return (
        <div className="button-group-container">
            {location.pathname === "/" && <Link to="/list" className="go-to-list-btn">Go to List</Link>}
            {location.pathname === "/list" && <Link to="/" className="go-to-dashboard-btn">Back</Link>}
        </div>
    )
}

export default ButtonContainer;