import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './chapterHeading.module.scss'

interface ChapterHeadingProps extends PropsWithChildren {
  className?: string
}

const ChapterHeading: React.FC<ChapterHeadingProps> = ({
  children,
  className
}) => <h4 className={clsx(styles['heading-text'], className)}>{children}</h4>

export default ChapterHeading
