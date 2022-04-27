import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const LinkBtn = ({ children, to }) => {

    return (
        <Link className="link" to={to}>
            {
                children
            }
        </Link>
    )
}

LinkBtn.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default LinkBtn;