import './Button.css'
export default function Button({onClick, text, style, disabled, ...rest}) {
    return (
        <button onClick={() => {onClick?.()}} style={style} disabled={disabled} {...rest} className='btn'>{text}</button>
    )
}