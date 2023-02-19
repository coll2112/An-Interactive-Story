import React, { FunctionComponent, PropsWithChildren } from 'react'

import styles from './layout.module.scss'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Layout
