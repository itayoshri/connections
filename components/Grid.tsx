import { useSnapshot } from 'valtio'
import { state } from '../pages'
import Row from './Row'

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
