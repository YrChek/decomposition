/**
 * Компонент отображения формы поиска
 */

export default function SearchForm() {
   return (
    <form className="searchForm">
      <span>ЯНДЕКС</span>
      <input type="search" />
      <img src="keyboard.png" alt="" />
      <button>Найти</button>
    </form>
   )
}
