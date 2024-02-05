import { ReactNode } from 'react'

interface ButtonProps {
  onClick?(): unknown
  className?: string
  children?: ReactNode | ReactNode[]
  secondary?: boolean
}

export default function Button({
  onClick,
  className,
  children,
  secondary = false,
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-7 py-3 font-semibold ${className} ${
        secondary
          ? 'bg-white text-black border-black border-[1px]'
          : 'bg-black text-white'
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
