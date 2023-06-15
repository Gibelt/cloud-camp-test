/* eslint-disable react/jsx-props-no-spreading */
import s from './Input.module.css'

export default function Input({register, label, htmlFor, placeholder, id, name, width}) {
  return (
    <label className={s.input_label} htmlFor={htmlFor}>
      {label}
      <input
        className={`${s.input_field} ${s[width]}`}
        placeholder={placeholder}
        {...register(name)}
        id={id}
      />
    </label>
  )
}
