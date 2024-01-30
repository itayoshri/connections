import { Dispatch, SetStateAction } from 'react'

interface WordCardProps {
  word: string
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}

export default function WordCard({ word, checked, setChecked }: WordCardProps) {
  return (
    <div
      className={`flex bg-stone-200 w-1/4 justify-center items-center h-[22.5vw] /h-24 rounded-lg text-black font-bold ${
        checked ? 'bg-stone-600 text-white' : ''
      }`}
      onClick={() => setChecked((prev) => !prev)}
    >
      {word}
    </div>
  )
}
