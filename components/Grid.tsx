import { useState } from 'react'
import WordCard from './WordCard'
import { useSnapshot } from 'valtio'
import { state } from '../pages'
import Row from './Row'

const Submit = () => {
  for (const w of state.words) {
    if (w.checked) {
      const group = state.groups[w.group]
      for (const word of group.correctWords) {
        if (!state.words[word].checked) {
          return false
        }
      }
      return true
    }
  }
  return false
}

export default function Grid() {
  const snap = useSnapshot(state)
  return (
    <div className="flex flex-col gap-2">
      {snap.grid.map((row, id) => (
        <Row arr={row} row={id} key={id} />
      ))}
    </div>
  )
}
