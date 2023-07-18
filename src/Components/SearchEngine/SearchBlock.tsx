import type { SearchPattern } from "./searchTypes";
import SearchBar from "./SearchBar";
import SearchForm from "./SearchFofm";
import SearchText from "./SearchText";

/**
 * Родительский компонент поисковой системы.
 * Поисковая система разделена на три компонета:
 * 1. Тематический поиск
 * 2. Форма поиска
 * 3. Рандомный пример поиска (условно)
 * @param data - входные параметры для тематического поиска и рандомной строки 
 */

export default function SearchBlok({ data }:Props) {

  return (
    <div className="searchBlock">
      <SearchBar section={data.sections} />
      <SearchForm />
      <SearchText example={data.searchExample} />
    </div>
  )
}

type Props = {
  data: SearchPattern
}
