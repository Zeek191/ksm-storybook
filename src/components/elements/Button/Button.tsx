import React, { PropsWithChildren } from 'react'
import * as styles from './Button.module.css'

export type ButtonTypes = {
  disabled?: boolean
  onClick?: () => void
  styleType?: 'primary' | 'secondary' | 'success' | 'error'
  styleSize?: 'big' | 'medium' | 'small'
}

export default function Button({ children, disabled, styleType = 'primary', styleSize = 'medium', onClick }: PropsWithChildren<ButtonTypes>) {
  return (
    <button data-type={styleType} data-size={styleSize} className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
