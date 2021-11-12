// Dependencies
import * as React from 'react'
import { useLocation, useNavigate } from '@reach/router'

/**
 * Render a select element with a set of limit options
 */
export const LimitSelect = (): React.ReactElement => {
  const location = useLocation()
  const navigate = useNavigate()

  /**
   * Capture the limit value from the select input and
   * update the URL with the new limit value
   *
   * @param event - The event object
   */
  const handleChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    const { value } = event.target

    const path = `${location.pathname}?limit=${value}`

    return navigate(path)
  }

  /**
   * We need to get the current limit value from the URL
   */
  const query = new URLSearchParams(location.search)
  const limit = query.get('limit') || '10'

  return (
    <div>
      <label
        htmlFor="limit"
        className="block text-sm font-medium text-gray-700"
      >
        Ofertas por página
      </label>
      <select
        id="limit"
        name="limit"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        defaultValue={limit}
        onChange={handleChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  )
}
