import React, {useState} from "react";


export const UncontroledRating = () => {

  const [value, setValue] = useState(0)

  return ( // делаем не как в Raiting.tsx
    <div>
      <UncontroledStar selected={value > 0} onClick={() => setValue(1)}/>
      <UncontroledStar selected={value > 1} onClick={() => setValue(2)}/>
      <UncontroledStar selected={value > 2} onClick={() => setValue(3)}/>
      <UncontroledStar selected={value > 3} onClick={() => setValue(4)}/>
      <UncontroledStar selected={value > 4} onClick={() => setValue(5)}/>
    </div>
  )
}

type UncontroledStarPropsType = {
  selected: boolean
  onClick: () => void
}

function UncontroledStar(props: UncontroledStarPropsType) {
  return (
    <span onClick={() => props.onClick()}>
      {props.selected ? <b>Star </b> : "Star"}
    </span>
  )
}