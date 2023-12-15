import { useState } from "react";

import Dimmer from "./dimmer";
import Light from "./light";

export default function DimmedLight () {
  const [v, setV] = useState(50);

  const handleOnDimmerValueChanged = (value) => {
    setV(value);
  }

  return (
    <>
      <Dimmer onDimmerValueChanged={handleOnDimmerValueChanged} />
      <Light v={v} color={{hue: 347, saturation: 100, lightness: 94}} />
      <Light v={v} color={{hue: 347, saturation: 100, lightness: 94}} />
      <Light v={v} color={{hue: 347, saturation: 100, lightness: 94}} />
      <Light v={v} color={{hue: 347, saturation: 100, lightness: 94}} />
      <Light v={v} color={{hue: 347, saturation: 100, lightness: 94}} />
      <Light v={v} color={{hue: 347, saturation: 100, lightness: 94}} />
    </>
  )
}