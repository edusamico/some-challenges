import './Button.css'

export const Button = ({ text, onClick }) => {
    return (
        <input
            type="button"
            value={text}
            onClick={onClick}>
        </input>
    )
}