// Dependencies
import * as React from 'react'
import type { RouteComponentProps } from '@reach/router'

// Internals
import { DirectoryList, LimitSelect } from '@/components'
import { API_URL } from '@/constants'
import { useRequest } from '@/hooks'
import { LoadingIcon } from '@/icons'
import type { DirectoryResult } from '@/types/Reworth'

export type HomeProps = RouteComponentProps

const Home: React.FC<HomeProps> = ({ location }): React.ReactElement => {
  const query = new URLSearchParams(location?.search)
  const limit = query.get('limit') || '10'

  const { data, isValidating } = useRequest<DirectoryResult>({
    url: `${API_URL}/directory?epp=${limit}`,
  })

  if (!data && isValidating) {
    return (
      <div className="flex items-center justify-center w-full py-32">
        <LoadingIcon className="w-10 h-10 mr-3 -ml-1 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <main className="py-16">
      <div className="container flex justify-end mb-4">
        <LimitSelect />
      </div>

      <DirectoryList offerList={data?.data} />
    </main>
  )
}

export default Home
