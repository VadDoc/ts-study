import React from 'react';

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onClick: () => void
}
const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle onClick={props.onClick} title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <div onClick={props.onClick}>
      <h3>{props.title}</h3>
    </div>
  )
}
const AccordionBody = () => {
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

export default Accordion