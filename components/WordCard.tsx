import { state } from '../pages'
import { IWord } from '../interfaces'

const SetChecked = (row, cell) => {
  state.words[row][cell].checked = !state.words[row][cell].checked
}

interface WordCardProps extends IWord {
  row: number
  cell: number
}

export default function WordCard({
  word,
  checked,
  completed,
  row,
  cell,
}: WordCardProps) {
  return (
    <div
      className={`flex bg-stone-200 w-1/4 justify-center items-center h-[22.5vw] /h-24 rounded-lg text-black font-bold ${
        checked ? 'bg-stone-600 text-white' : ''
      }`}
      onClick={() => SetChecked(row, cell)}
    >
      {word}
    </div>
  )
}
