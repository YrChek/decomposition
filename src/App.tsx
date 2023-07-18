import dataNews from './Components/NewsBlock/dataNews';
import searchData from './Components/SearchEngine/searchData';
import dataWidget from './Components/Widgets/dataWidget';
import NewsBlock from './Components/NewsBlock/NewsBlock';
import SearchBlok from './Components/SearchEngine/SearchBlock';

import './App.css'
import Billboard from './Components/Billboard/Billboard';
import Widgets from './Components/Widgets/Widgets';

/**
 * Компонент включающий в себя компоненты отвечающие за отображения условных блоков страницы
 * Страница разбита на четыре блока:
 * 1. Блок новостей - NewsBlook;
 * 2. Поисковая система - SearchBlock;
 * 3. Рекламный блок - Billboard (его только обозначил)
 * 4. Блок виджетов - Widgets
 */

function App() {

  return (
    <div className='container'>
      <NewsBlock dataNews={dataNews}/>
      <SearchBlok data={searchData} />
      <Billboard />
      <Widgets dataWidget={dataWidget}/>
    </div>
  )
}

export default App
