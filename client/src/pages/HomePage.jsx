import React from 'react'
import SideBar from '../copmonents/SideBar'
import ChatContainer from '../copmonents/ChatContainer'
import RightSidebar from '../copmonents/RightSidebar'


const HomePage = () => {
  return (
    <div className='border w-full h-screen sm:px-screen sm:py-[5%]'>
      <div>
        <SideBar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
//className='border w-full h-screen sm:px-screen sm:py-[5%]'