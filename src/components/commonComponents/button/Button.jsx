import s from './Button.module.css'

export default function Button({title, type, mode}) {
    return (
        <button type={type ? 'submit' : 'button'} className={s[mode]}>{title}</button>
    )
}