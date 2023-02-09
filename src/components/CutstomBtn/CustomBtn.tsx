import { FunctionComponent } from "react"
import styles from './CustomBtn.module.scss'
type Props = {
    text: string,
    customStyle: string
}
const CustomBtn:FunctionComponent<Props> = ({text, customStyle}) => {
  return (
    <button className={customStyle}>{text}</button>
  )
}

export default CustomBtn