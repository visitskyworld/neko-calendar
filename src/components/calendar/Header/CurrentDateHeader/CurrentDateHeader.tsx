import React from 'react'
import { useSelector } from 'react-redux'

import { selectCurrentCalendar } from '../../../../redux/selectors'

export const CurrentDateHeader = ({ isHome }: { isHome: boolean }) => {
  const currentCalendar = useSelector(selectCurrentCalendar)!
  const searchValue: string = currentCalendar[1][1].id
  const parcedSearchValue: string[] = searchValue.split('-')
  let date: Date = new Date(
    +parcedSearchValue[0],
    +parcedSearchValue[1] - 1,
    +parcedSearchValue[2]
  )

  return (
    <div
      className={`current-date-header text-inherit font-sans font-bold tracking-normal leading-7 whitespace-nowrap flex items-center mx-4 ${
        isHome ? 'text-[15px]' : 'text-[22px]'
      }`}
    >
      {`${date.toLocaleString('en', { month: 'long' })} ${date.getFullYear()}`}
    </div>
  )
}
