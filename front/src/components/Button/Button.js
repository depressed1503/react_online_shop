import './Button.css'
export default function Button({onClick, text, style}) {
    return (
        <button onClick={() => {onClick?.()}} style={style} className='btn'>{text}</button>
    )
}