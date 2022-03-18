import React, { PropsWithChildren } from 'react'
import Button from '@/components/elements/Button'
import * as styles from './pages.module.css'

function Col({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div>
      <h2 className={styles.colTitle}>{title}</h2>
      {children}
    </div>
  )
}

function Row({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

function ButtonsCollection({ type }: { type: 'primary' | 'secondary' | 'success' | 'error' }) {
  return (
    <Col title={type}>
      <Row title="SMALL">
        <Button styleSize="small" styleType={type}>
          BUTTON
        </Button>
      </Row>

      <Row title="MEDIUM">
        <Button styleSize="medium" styleType={type}>
          BUTTON
        </Button>
      </Row>

      <Row title="BIG">
        <Button styleSize="big" styleType={type}>
          BUTTON
        </Button>
      </Row>

      <Row title="SMALL - DISABLED">
        <Button styleSize="small" styleType={type} disabled>
          BUTTON
        </Button>
      </Row>

      <Row title="MEDIUM - DISABLED">
        <Button styleSize="medium" styleType={type} disabled>
          BUTTON
        </Button>
      </Row>

      <Row title="BIG - DISABLED">
        <Button styleSize="big" styleType={type} disabled>
          BUTTON
        </Button>
      </Row>
    </Col>
  )
}
export default function ButtonsPage() {
  return (
    <main className={styles.wrapper}>
      <ButtonsCollection type="primary" />
      <ButtonsCollection type="secondary" />
      <ButtonsCollection type="success" />
      <ButtonsCollection type="error" />
    </main>
  )
}
