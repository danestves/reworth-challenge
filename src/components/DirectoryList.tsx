// Dependencies
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

// Internals
import Directory from './Directory'
import type { Datum } from '@/types/Reworth'

export type DirectoryListProps = {
  offerList?: Datum[]
}

export function DirectoryList({ offerList }: DirectoryListProps) {
  return (
    <ul className="container grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5">
      {offerList?.map((offer) => (
        <Directory key={uuidv4()} directory={offer} />
      ))}
    </ul>
  )
}
