import { state } from '../pages'
import { IGridWord } from '../interfaces'
import { useSnapshot } from 'valtio'
import { useMemo } from 'react'

const SetChecked = (row, cell) => {
  const id = state.grid[row][cell].id
  state.words[id].checked = !state.words[id].checked
}

interface WordCardProps extends IGridWord {
  row: number
  cell: number
}

export default function WordCard({ row, cell }: WordCardProps) {
  const snap = useSnapshot(state)
  const id = snap.grid[row][cell].id

  return (
    <div
      className={`flex bg-stone-200 w-1/4 justify-center items-center h-[22.5vw] /h-24 rounded-lg text-black font-bold ${
        snap.words[id].checked ? 'bg-stone-600 text-white' : ''
      }`}
      onClick={() => SetChecked(row, cell)}
    >
      {snap.words[snap.grid[row][cell].id].word}
    </div>
  )
}
