import React, { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react'
import * as styles from './Input.module.css'

export type InputTypes = PropsWithChildren<
  InputHTMLAttributes<HTMLInputElement> & {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }
>

export default function Input({ children, id, name, type = 'text', value, onChange, ...rest }: InputTypes) {
  return (
    <label htmlFor={name} className={styles.label}>
      {children}
      <input id={id} name={name} type={type} value={value} onChange={onChange} className={styles.input} {...rest} />
    </label>
  )
}
