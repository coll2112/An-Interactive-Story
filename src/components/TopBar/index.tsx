import Button from '~components/Base/Button'
import ChapterHeading from '~components/ChapterHeading'

import styles from './topBar.module.scss'

interface Props {
  chapterHeading: string
  hasActiveSave: boolean
  onSaveClick(): void
  onLoadClick(): void
}

const TopBar = ({
  chapterHeading,
  hasActiveSave,
  onSaveClick,
  onLoadClick
}: Props) => (
  <div className={styles.container}>
    <ChapterHeading chapterHeading={chapterHeading} />
    <div className={styles['container-buttons']}>
      <Button type="button" onClick={onSaveClick}>
        Save Game
      </Button>
      <Button disabled={!hasActiveSave} type="button" onClick={onLoadClick}>
        Load Game
      </Button>
    </div>
  </div>
)

export default TopBar
