import { nanoid } from "nanoid";
import type { Accept } from "./typeWidgets";

/**
 * Компонент отображения виджета типа weather
 * @param data -> { type: string; title: string; text: Array\<Object> | Array\<string>; url: string; now?: string | undefined; img?: string | undefined; } 
 */

export default function Weather({ data }: Props) {

  return (
    <div className="widget weather">
      <div><a href={data.url}>{data.title}</a></div>
      <div>
        <img src={data.img} alt="" width={50}/>
        <span>{data.now}</span>
      </div>
      <div>
        {data.text.map((txt) => <pre key={nanoid()}>{txt.toString()}</pre> )}
      </div>      
    </div>
  )
}

type Props = {
  data: Accept
}
