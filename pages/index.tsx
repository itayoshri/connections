import Image from 'next/image'
import { Inter } from 'next/font/google'
import WordCard from '../components/WordCard'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Grid from '../components/Grid'
import { proxy, snapshot, useSnapshot } from 'valtio'
import { IGroup, IGridWord, IWord } from '../interfaces'
import Group from '../components/Group'
import Button from '../components/Button'
const inter = Inter({ subsets: ['latin'] })
import axios from 'axios'

export const state = proxy({
  grid: [] as IGridWord[][],
  groups: [] as IGroup[],
  words: [] as IWord[],
  completed: [] as Partial<IGroup[]>,
})

export default function Home() {
  const resetGrid = useCallback(() => {
    state.grid = []
    var arr = []
    var counter = 0
    for (const w in state.words) {
      if (state.groups[state.words[w].group].completed) {
        state.words[w].checked = false
        continue
      }
      counter++
      arr.push({ id: w })
      if (counter != 0 && counter % 4 == 0) {
        counter = 0
        state.grid.push(arr)
        arr = []
      }
    }
  }, [])

  const Submit = useCallback(() => {
    for (const w of state.words) {
      if (w.checked) {
        const group = state.groups[w.group]
        for (const word of group.correctWords) {
          if (!state.words[word].checked) {
            return false
          }
        }
        state.groups[w.group].completed = true
        state.completed.push(group)
        resetGrid()
        break
      }
    }
    return false
  }, [])

  useEffect(() => {
    axios('/api/hello').then((res) => {
      state.groups = res.data.groups
      state.words = res.data.words
      resetGrid()
    })
  }, [resetGrid])

  const snap = useSnapshot(state)

  return snap.groups.length > 0 ? (
    <div className="bg-pink-300 flex flex-col h-screen w-screen gap-2">
      {snap.completed.map((group, key) => (
        <Group {...group} key={key} />
      ))}
      <Grid />
      <div className="flex w-full gap-2">
        <Button onClick={() => Submit()} className="w-full" secondary>
          Submit
        </Button>
        <Button onClick={() => Submit()} className="w-full" secondary>
          Submit
        </Button>
        <Button onClick={() => Submit()} className="w-full">
          Submit
        </Button>
      </div>
    </div>
  ) : null
}
