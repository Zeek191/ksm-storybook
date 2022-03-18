import * as React from 'react'
import Button from '@/components/elements/Button'
import * as styles from './pages.module.css'

const IndexPage = () => {
  return (
    <main className={styles.centerWrapper}>
      <Button styleType="success" styleSize="medium" disabled>
        test
      </Button>
      <Button styleType="error" styleSize="medium" disabled>
        test
      </Button>
    </main>
  )
}

export default IndexPage
