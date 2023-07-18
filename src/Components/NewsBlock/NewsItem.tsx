import type { NewsFeedPattern } from "./typeNews"

export default function NewsItem({ obj }:Props) {

  return (
    <div className="newsItem">
      <a href={obj.url}>
        <img src={obj.img} alt="" width={20}/>
        <span>{obj.text}</span>
      </a>
    </div>
  )
}

type Props = {
  obj: NewsFeedPattern
}