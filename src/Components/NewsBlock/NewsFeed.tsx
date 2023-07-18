import { nanoid } from "nanoid";
import NewsItem from "./NewsItem";
import type { NewsFeedPattern } from "./typeNews";

/**
 * Комонент отображения новостой ленты
 * @param newsFeed данные новостей 
 */

export default function NewsFeed({ newsFeed }:Props) {

  return (
    <div className="newsFeed">{newsFeed.map((obj) => <NewsItem obj={obj} key={nanoid()}/>)}</div>
  )
}

type Props = {
  newsFeed:NewsFeedPattern[]
}
