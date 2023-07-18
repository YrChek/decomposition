import { nanoid } from "nanoid";
import type { SectionsPattern } from "./searchTypes";

/**
 * Компонент строки тематического поиска
 * @param section -> { text: string; url: string }
 */

export default function SearchBar({ section }: Props) {

  return (
    <div className="searchBar">
      {section.map((el) => <a href={el.url} key={nanoid()}>{el.text} </a>)}
    </div>
  )
}

type Props = {
  section: SectionsPattern[]
}
