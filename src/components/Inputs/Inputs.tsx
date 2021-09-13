import React, {ChangeEvent, ChangeEventHandler, useState} from "react";

export const InputControled = () => {
  const [parentValue, setParentValue] = useState('')
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return (
    <div>
      <input value={parentValue} onChange={onChangeInput} />
    </div>
  )
}


export const CheckboxControled = () => {
  const [parentValue, setParentValue] = useState(false)
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // setParentValue(!parentValue)
    setParentValue( e.currentTarget.checked)
  }
  return (
    <div>
      <input type={"checkbox"} checked={parentValue} onChange={onChangeInput} />
    </div>
  )
}

export const SelectControled = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  
  return (
    <div>
      <select value={parentValue} onChange={onChangeSelect}>
        <option>Cities</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
      </select>
    </div>
  )
}
