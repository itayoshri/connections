import Image from 'next/image'
import { Inter } from 'next/font/google'
import WordCard from '../components/WordCard'
import { useState } from 'react'
import Grid from '../components/Grid'
import { proxy } from 'valtio'
import { IGroup, IGridWord } from '../interfaces'
const inter = Inter({ subsets: ['latin'] })

export const state = proxy({
  grid: [[{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]] as IGridWord[][],
  groups: [
    {
      correctWords: [0, 1, 2, 3],
      completed: true,
    },
  ] as IGroup[],
  words: [
    { word: 'Example', group: 0, checked: false },
    { word: 'hey', group: 0, checked: false },
    { word: 'Good bye', group: 0, checked: false },
    { word: 'Good morning', group: 0, checked: false },
  ],
})

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <Grid />
    </div>
  )
}
