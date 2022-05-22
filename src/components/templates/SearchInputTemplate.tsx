import { useState } from 'react'
import { useSearchInputTemplate } from './useSearchInputTemplate'
import { searchInputTemplateProps } from 'types/searchInfo'

const MainTemplete: React.FC<searchInputTemplateProps> = ({ latitude, longitude }) => {
  // 検索範囲
  const [range, setRange] = useState<string>('1')
  // 検索結果一覧画面への遷移
  const [clickMove] = useSearchInputTemplate()

  return (
    <>
      <h1>レストラン検索画面</h1>
      <p>検索範囲を指定</p>
      <select onChange={(e) => setRange(e.target.value as string)}>
        <option value="1" selected>
          300m
        </option>
        <option value="2">500m</option>
        <option value="3">1000m</option>
        <option value="4">2000m</option>
        <option value="5">2000m</option>
      </select>
      <button onClick={() => clickMove(latitude, longitude, range)}>検索</button>
    </>
  )
}

export default MainTemplete
