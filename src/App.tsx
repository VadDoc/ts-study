import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import UncotroledAccordion from "./components/UncotroledAccordion/UncotroledAccordion";
import {Rating, ValueType} from "./components/Rating/Rating";
import {UncontroledRating} from "./components/UncontroledRating/UncontroledRaiting"
import {OnOff} from "./components/OnOff/OnOff";
import {CheckboxControled, InputControled, SelectControled} from "./components/Inputs/Inputs";

function App() {
  const [ratingValue, setRatingValue] = useState <ValueType>(0);
  const [collapsed, setCollapsed] = useState <boolean>(false)
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="App">
      <PageTitle title={'This is App component'}/>
      <Rating
        value={ratingValue}
        onClick={setRatingValue}
      />
      <UncontroledRating/>
      <Accordion
        title={'Accordion controled'}
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      />
      <UncotroledAccordion title={'Accordion uncontroled'}/>
      <OnOff
        onClick={setSwitchOn}
        on={switchOn}
      />
      <InputControled/>
      <CheckboxControled/>
      <SelectControled/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h2>{props.title}</h2>
  );
}


export default App;
