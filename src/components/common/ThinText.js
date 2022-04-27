import PropTypes from "prop-types"

const ThinText = ({ children }) => {

    return (
        <p className="thin-text">
            {
                children
            }
        </p>
    )
}

ThinText.propTypes={
    children:PropTypes.object.isRequired
}

export default ThinText;