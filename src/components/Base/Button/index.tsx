import clsx from 'clsx'
import { FunctionComponent } from 'react'

import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ children, ...rest }) => (
  <button className={clsx(styles.button)} type="button" {...rest}>
    {children}
  </button>
)

export default Button
