import { IGridWord } from '../interfaces'
import WordCard from './WordCard'

interface RowProps {
  arr: Readonly<IGridWord[]>
  row: number
}
export default function Row({ arr, row }: RowProps) {
  return (
    <div className="flex gap-2">
      {arr.map((word, cell) => (
        <WordCard {...word} cell={cell} row={row} key={cell} />
      ))}
    </div>
  )
}
