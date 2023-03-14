import { FunctionComponent } from "react"
import styles from './CustomBtn.module.scss'
type Props = {
    text: string,
    customStyle: string,
    onClick: any
}
const CustomBtn:FunctionComponent<Props> = ({text, customStyle, onClick}) => {
  return (
    <button className={customStyle} onClick={onClick}>{text}</button>
  )
}

export default CustomBtn