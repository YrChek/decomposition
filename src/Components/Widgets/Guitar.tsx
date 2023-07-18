import { nanoid } from "nanoid";
import type { Accept, Texts } from "./typeWidgets";

/**
 * Компонент отображения виджетов типа guitar
 * 
 * @param data -> { type: string; title: string; text: Array\<Object> | Array\<string>; url: string; now: string | undefined; img: string | undefined; } 
 */

export default function Guitar({ data }: Props) {

  const newData = data as Omit<Accept, 'text'> & {text: Texts[]}

  return (
    <div className="widget guitar">
      <div className="guitarTitile">
        <a href={newData.url}>{data.title}</a>
        {
          data.img
          ? <img src={data.img} alt="" width={50}/>
          : <></>
        }
      </div>
      <div>
        {newData.text.map((el) => 
          <div key={nanoid()}>
            {el.img ? <a href={el.url}><img src={el.img} alt="" width={20}/></a> : <></>}
            <a href={el.url}>{el.title} </a>
            <a href={el.url}>{el?.text}</a>
            <a href={el.url}>{el?.span}</a>
          </div>
        )}
      </div>
    </div>
  )
}

type Props = {
  data: Accept
}
