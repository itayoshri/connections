type Row = 0 | 1 | 2 | 3

export interface IGridWord {
  id: number
}

export interface IGroup {
  correctWords: number[]
  completed: boolean
}

export interface IWord {
  word: string
  group: number
  checked: boolean
}
