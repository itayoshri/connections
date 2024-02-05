import { state } from '../pages'
import { IWord } from '../interfaces'

const SetChecked = (row, id) => {
  state.words[row][id].checked = !state.words[row][id].checked
}

interface WordCardProps extends IWord {
  rowId: number
  id: number
}

export default function WordCard({
  word,
  checked,
  completed,
  rowId,
  id,
}: WordCardProps) {
  return (
    <div
      className={`flex bg-stone-200 w-1/4 justify-center items-center h-[22.5vw] /h-24 rounded-lg text-black font-bold ${
        checked ? 'bg-stone-600 text-white' : ''
      }`}
      onClick={() => SetChecked(rowId, id)}
    >
      {word}
    </div>
  )
}
