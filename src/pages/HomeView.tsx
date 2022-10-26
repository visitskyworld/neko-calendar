import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { changeCalendarView } from '../redux/actions/actionsUI'
import CollabsContainer from '../components/homeView/CollabsContainer'
import HomeSide from '../components/homeView/HomeSide'
import PopularMints from '../components/homeView/PopularMints'
import UpcomingMints from '../components/homeView/UpcomingMints'

const HomeView: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCalendarView('month'))
  }, [])

  return (
    <div className="home-wrapper w-full h-[calc(100%-82px)] flex mt-12">
      <div className="home-container flex flex-col w-[calc(100%-360px)] pr-12 overflow-y-auto">
        <div className="flex 2xl:flex-nowrap flex-wrap">
          <UpcomingMints />
          <PopularMints />
        </div>
        <div className="h-2/5 mt-3">
          <CollabsContainer />
        </div>
      </div>
      <aside className="sidebar w-[380px] h-[878px] -translate-y-[70px]">
        <HomeSide />
      </aside>
    </div>
  )
}

export default HomeView
