// Dependencies
import * as React from 'react'

// Internals
import type { Datum } from '@/types/Reworth'

export type DirectoryProps = {
  directory: Datum
}

export const Directory = ({
  directory,
}: DirectoryProps): React.ReactElement => {
  return (
    <li className="transition-colors duration-150 rounded-lg hover:bg-primary-50/50">
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-auto"
          src={directory.media}
          alt={directory.name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 line-clamp-1">
            <span>{directory.dv_category}</span>
          </p>
          <a
            href="https://www.reworth.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2"
          >
            <p className="text-xl font-semibold text-gray-900 line-clamp-1">
              {directory.name}
            </p>
          </a>
        </div>
        <p className="mt-1 text-sm">
          <span className="text-[#636363] font-medium">Cashback:</span>{' '}
          {directory.dv_cashback}
        </p>
      </div>
    </li>
  )
}

export default Directory
