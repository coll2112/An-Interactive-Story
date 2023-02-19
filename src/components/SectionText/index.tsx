import { FunctionComponent } from 'react'

interface SectionTextProps {
  sectionText: string
}

const SectionText: FunctionComponent<SectionTextProps> = ({ sectionText }) => (
  <p>{sectionText}</p>
)

export default SectionText
