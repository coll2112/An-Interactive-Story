import { FunctionComponent } from 'react'

import styles from './sectionText.module.scss'

interface SectionTextProps {
  sectionText: string
}

const SectionText: FunctionComponent<SectionTextProps> = ({ sectionText }) => (
  <p className={styles['section-text']}>{sectionText}</p>
)

export default SectionText
