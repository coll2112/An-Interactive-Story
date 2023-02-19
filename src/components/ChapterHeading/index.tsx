import { FunctionComponent } from 'react'

interface ChapterHeadingProps {
  chapterHeading: string
}

const ChapterHeading: FunctionComponent<ChapterHeadingProps> = ({
  chapterHeading
}) => <h4>{chapterHeading}</h4>

export default ChapterHeading
