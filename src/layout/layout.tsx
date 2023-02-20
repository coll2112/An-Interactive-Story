import { FunctionComponent, PropsWithChildren } from 'react'
import Header from './header'

import styles from './layout.module.scss'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

export default Layout
