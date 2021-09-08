import React, {useState} from 'react'

type UncotroledAccordionPropsType = {
  title: string
}

const UncotroledAccordion = (props: UncotroledAccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <UncotroledAccordionTitle onClick={() => setCollapsed(!collapsed)} title={props.title}/>
      {!collapsed && <UncotroledAccordionBody/>}
    </div>
  )
}

type UncotroledAccordionTitlePropsType = {
  title: string
  onClick: () => void
}

const UncotroledAccordionTitle = (props: UncotroledAccordionTitlePropsType) => {
  // console.log('AccordionTitle is rendering')
  return (
    <div>
      <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    </div>
  )
}
const UncotroledAccordionBody = () => {
  // console.log('AccordionBody is rendering')
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default UncotroledAccordion
