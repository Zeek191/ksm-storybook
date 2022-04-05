import React, { ChangeEvent, useEffect, useState } from 'react'
import Input from '@/components/elements/Input'
import * as styles from './pages.module.css'

export default function InputPage() {
  const [value, setValue] = useState<string>('')

  function changeValue(e: ChangeEvent<HTMLInputElement>) {
    return setValue(e.target.value)
  }

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <main className={styles.centerWrapper}>
      <Input name="test" id="test" value={value} onChange={changeValue}>
        Test input
      </Input>
    </main>
  )
}
