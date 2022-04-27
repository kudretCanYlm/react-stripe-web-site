import PropTypes from "prop-types"

export default function BlackBtn({ text }) {


    return (
        <button className="btn black-btn">
            {
                text
            }
        </button>
    )
}

BlackBtn.propTypes={
    text:PropTypes.string.isRequired
}