import { useState } from 'react'
import WordCard from './WordCard'
import { useSnapshot } from 'valtio'
import { state } from '../pages'
import Row from './Row'

export default function Grid() {
  const snap = useSnapshot(state)
  return (
    <div className="flex flex-col gap-2">
      {snap.words.map((row, id) => (
        <Row row={row} rowId={id} key={id} />
      ))}
    </div>
  )
}
