import PropTypes from "prop-types"

const ThickText = ({ children }) => {

    return (
        <p className="thick-text">
            {
                children
            }
        </p>
    )
}

ThickText.propTypes={
    children:PropTypes.object.isRequired
}

export default ThickText;