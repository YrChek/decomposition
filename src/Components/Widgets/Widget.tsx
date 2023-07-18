/**
 * Компонент отображения блоков виджетов
 * @param children дочерний компонент или группу дочерних компонентов 
 */

export default function Widjet({ children }: Props) {

  return (
    <div className="Widgets">
      {children}
    </div>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
