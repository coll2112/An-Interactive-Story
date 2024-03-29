import clsx from 'clsx'
import styles from './sectionText.module.scss'

interface SectionTextProps {
  sectionText: string
  className?: string
}

export const SectionText: React.FC<SectionTextProps> = ({
  sectionText,
  className
}) => <p className={clsx(styles['section-text'], className)}>{sectionText}</p>
