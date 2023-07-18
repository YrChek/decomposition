import { nanoid } from "nanoid";
import type { Accept, Texts } from "./typeWidgets";

/**
 * Компонент отображения виждета типа accordion
 * @param data -> { type: string; title: string; text: Array\<Object> | Array\<string>; url: string; now: string | undefined; img: string | undefined; } 
 */

export default function Accordion({ data }: Props) {

  const newData = data as Omit<Accept, 'text'> & {text: Texts[]}

  return (
    <div className="widget accordion">
      <div className="title_accordion">
        <a href={newData.url}>{data.title}</a>
      </div>
      <div>
        {newData.text.map((el) => 
          <div key={nanoid()}>
            <a href={el.url} className="title_text_accordion">{el.title}</a>
            <a href={el.url}>{el.text}</a>
          </div>
        )}
      </div>
    </div>
  )
}

type Props = {
  data: Accept
}