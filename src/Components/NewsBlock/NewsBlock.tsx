import type { NewsPattern } from "./typeNews";
import News from "./News";
import NewsFeed from "./NewsFeed";
import AdBlock from "./AdBlock";

/**
 * Родительский компонент блока новостей разделен на два условных блока
 * 1. Новостной раздел
 * 2. Собственная реклама
 * @param dataNews входные данные для обоих блоков
 */

export default function NewsBlock ({ dataNews }:Props) {

  return (
  <div className="newsBlock">
    <News line={dataNews.header.newsLine} currency={dataNews.header.currency}>
      <NewsFeed newsFeed={dataNews.header.newsFeed}/>
    </News>
    <AdBlock adBlock={dataNews.header.adBlock}/>
  </div>
  )
}

type Props = {
  dataNews: NewsPattern
}
