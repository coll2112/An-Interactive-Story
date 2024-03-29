import clsx from 'clsx'
import { MouseEvent } from 'react'
import { useGameOptionsProvider } from '~/contexts/game-options'

import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  const { sfx } = useGameOptionsProvider() || {}

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
    void sfx?.load()
    void sfx?.play()
  }

  return (
    <button
      className={clsx(styles.button)}
      type="button"
      onClick={(e) => handleOnClick(e)}
      {...rest}
    >
      {children}
    </button>
  )
}
