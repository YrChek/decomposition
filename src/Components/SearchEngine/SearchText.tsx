import type { SearchExamplePattern } from "./searchTypes";

/**
 * Компонент отображения строки рандомного поиского примера
 * @param example -> { text: string; url: string }
 */

export default function SearchText({ example }: Props) {

  return (
    <div className="searchText">
      <span>Найдется все. Например, </span>
      <a href={example.url}>{example.text}</a>
    </div>
  )
}

type Props = {
  example: SearchExamplePattern
}
