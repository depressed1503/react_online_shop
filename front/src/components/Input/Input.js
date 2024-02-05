import './Input.css'

export default function Input({onChange, placeholder}) {
    return (
        <input placeholder={placeholder} onChange={(event) => {onChange(event.target.value)}} className='inp'></input>
    )
}