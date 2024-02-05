import { useMemo } from 'react'
import { IGroup } from '../interfaces'
import { state } from '../pages'

const colors = {
  yellow: 'bg-yellow-200',
  blue: 'bg-blue-200',
  purple: 'bg-purple-300',
  green: 'bg-lime-400',
}

export default function Group({ correctWords, completed, category }: IGroup) {
  const words = useMemo(() => {
    var temp = ''
    for (const w of correctWords) {
      temp += `${state.words[w].word}, `
    }
    return temp
    //TODO: Fix last/first words
  }, [correctWords])

  return (
    <div
      className={`flex flex-col h-[22.5vw] items-center justify-center gap-1 rounded-lg ${colors['purple']}`}
    >
      <h1 className="text-2xl font-black">{category}</h1>
      <a>{words}</a>
    </div>
  )
}
