import React, {useState} from "react";

export type OnOffPropsType = {
  onClick: (on: boolean) => void
  on: boolean
}

export function OnOff(props: OnOffPropsType) {
  // const [on, setOn] = useState(false)
  const onStyle = {
    width: '50px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '5px',
    backgroundColor: props.on ? 'green' : 'white',
    cursor: 'pointer',
  }
  const offStyle = {
    width: '50px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '10px',
    padding: '5px',
    backgroundColor: props.on ? 'white' : 'red',
    cursor: 'pointer',
  }

  const indicatorStyle = {
    width: '50px',
    height: '50px',
    border: '1px solid black',
    borderRadius: '50%',
    marginLeft: '5px',
    marginTop: '5px',
    backgroundColor: props.on ? 'green' : 'red'
  }

  const onClicked = () => props.onClick(true)
  const offClicked = () => props.onClick(false)

  return (
    <div>
      <div onClick={onClicked} style={onStyle}>ON</div>
      <div onClick={offClicked} style={offStyle}>OFF</div>
      <div style={indicatorStyle}> </div>
    </div>
  )
}

