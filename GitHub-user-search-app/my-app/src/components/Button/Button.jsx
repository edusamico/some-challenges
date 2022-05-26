import './Button.css'

export const Button = ({ text, onClick }) => {
    return (
        <input
            type="submit"
            value={text}
            onClick={onClick}>
        </input>
    )
}