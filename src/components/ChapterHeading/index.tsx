import { FunctionComponent } from 'react'

import styles from './chapterHeading.module.scss'

interface ChapterHeadingProps {
  chapterHeading: string
}

const ChapterHeading: FunctionComponent<ChapterHeadingProps> = ({
  chapterHeading
}) => <h4 className={styles['heading-text']}>{chapterHeading}</h4>

export default ChapterHeading
