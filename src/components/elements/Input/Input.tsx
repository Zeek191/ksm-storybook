import React, { PropsWithChildren } from 'react'

export type InputTypes = {
  value: string
  onChange: () => void
}

export default function Input({ children, id, name, type = 'text', value, onChange, ...rest }: PropsWithChildren<HTMLInputElement & InputTypes>) {
  return (
    <label htmlFor={name}>
      {children}
      <input id={id} name={name} type={type} value={value} onChange={onChange} {...rest} />
    </label>
  )
}
