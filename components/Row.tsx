import { IWord } from '../interfaces'
import WordCard from './WordCard'

interface RowProps {
  row: Readonly<IWord[]>
  rowId: number
}
export default function Row({ row, rowId }: RowProps) {
  return (
    <div className="flex gap-2">
      {row.map((word, id) => (
        <WordCard {...word} id={id} rowId={rowId} key={rowId} />
      ))}
    </div>
  )
}
