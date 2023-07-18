import type { AdBlockPattern } from "./typeNews"

/**
 * Компонент отображения собственной рекламы
 * @param addBlock данные для рекламы 
 */

export default function AdBlock({ adBlock }:Props) {

  return (
    <div className="adBlock">
      <img src={adBlock.img} alt="" width={100}/>
      <a href={adBlock.url}>{adBlock.title}</a>
      <br />
      <span>{adBlock.text}</span>
    </div>
  )
}

type Props = {
  adBlock: AdBlockPattern
}