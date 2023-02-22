import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
  onSaveClick(): void
  onLoadClick(): void
}

const TopBar = ({ chapterHeading, onSaveClick, onLoadClick }: Props) => (
  <div className={styles.container}>
    <ChapterHeading chapterHeading={chapterHeading} />
    <div className={styles['container-buttons']}>
      <Button type="button" onClick={onSaveClick}>
        Save Game
      </Button>
      <Button type="button" onClick={onLoadClick}>
        Load Game
      </Button>
    </div>
  </div>
)

export default TopBar
