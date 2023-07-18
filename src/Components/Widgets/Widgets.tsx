import { nanoid } from "nanoid";
import type { Accept } from "./typeWidgets";
import Widget from "./Widget";
import Weather from "./Weather";
import Accordion from "./Accordion";
import Guitar from "./Guitar";

/**
 * Родительский компонент блока виджетов
 * @param dataWidget список объектов 
 */

export default function Widgets({ dataWidget }:Props) {

  return (
    <Widget>
      {dataWidget.map((el) =>
        el.type === 'weather'
          ? <Weather data={el} key={nanoid()}/>
          : el.type === 'accordion'
            ? <Accordion data={el} key={nanoid()}/>
            : <Guitar data={el} key={nanoid()}/>
      )}
    </Widget>
  )
}

type Props = {
  dataWidget: Accept[]
}