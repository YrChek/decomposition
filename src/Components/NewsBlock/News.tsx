import type { NewsLinePattern, CurrencyPattern } from "./typeNews";
import { nanoid } from "nanoid";

/**
 * Родительский компонент новостного раздела. Включает в себя:
 * 1. строка тематических ссылок
 * 2. дочерний компонент отображения новостной ленты
 * 3. строка конвертации валюты
 * @param line данные для строки ссылок на тематические новости
 * @param currency данные о стоимости валюты 
 * @param компонет новостной ленты 
 */

export default function News({ children, line, currency}:Props) {

  return (
    <div className="news">
      <div className="newsLine">
        {line.map((obj) => <a href={obj.url} key={nanoid()}>{obj.text}</a>)}
        <span className="date">сегодня(дата)</span>
      </div>
      {children}
      <div className="currency">
        <span>USD MOEX {currency.usd} {currency.usdGrowth}</span>
        <span>EUR MOEX {currency.eur} {currency.eurGrowth}</span>
        <span>НЕФТЬ {currency.oil} {currency.oilGrowth}</span>
        <a href="">...</a>
      </div>
    </div>
  )
}

type Props = {
  children: JSX.Element;
  line: NewsLinePattern[];
  currency: CurrencyPattern
}