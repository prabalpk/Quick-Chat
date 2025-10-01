import React, {useEffect, useRef} from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils'

const ChatContainer = ({selectedUser,setSelectedUser}) => {

  const scrollEnd = useRef()

  useEffect(()=>{
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoView({behavior : "smooth" })
    }
  },[])



  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      {/*------header------*/}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick ={()=> setSelectedUser(null) } src={assets.help_icon} alt="" className='md:hidden max-w-7' />
        <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
      </div>
      {/*-----------chat area--------------*/}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((msg,index) => (
          <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt="" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8'/>
            ):(
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white
                 ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
            )}
            
            <div className='text-center text-xs'>
              <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt=""  className='w-7 rounded-full '/>
              <p className="text-gray-500">
                {new Date(msg.createdAt).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' ,
                hour12: false 
                })}
              </p>

            </div>


            
          </div>
        ))}
        <div ref = {scrollEnd}>

        </div>
      </div>

{/* ----------------bottom area--------------------- */}
   
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.logo_icon} alt="" className='max-w-16' />
      <p className='text-lg font-medium text-white'>Chat anytime, anywhere</p>
    </div>
  )
}

export default ChatContainer
















//   import React from 'react'
// import assets, { messagesDummyData } from '../assets/assets'

// const ChatContainer = ({ selectedUser, setSelectedUser }) => {
//   return selectedUser ? (
//     <div className="h-full overflow-scroll relative backdrop-blur-lg">
//       {/* Header */}
//       <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
//         <img
//           src={selectedUser?.profilePic || assets.avatar_icon}
//           alt=""
//           className="w-8 h-8 rounded-full object-cover"
//         />
//         <p className="flex-1 text-lg text-white flex items-center gap-2">
//           {selectedUser?.fullName || 'Unknown User'}
//           <span className="w-2 h-2 rounded-full bg-green-500"></span>
//         </p>
//         {/* Close button for mobile */}
//         <img
//           onClick={() => setSelectedUser(null)}
//           src={assets.close_icon}
//           alt="close"
//           className="md:hidden w-7 cursor-pointer"
//         />
//         {/* Help or menu for desktop */}
//         <img src={assets.help_icon} alt="help" className="max-md:hidden w-5" />
//       </div>

//       {/* Chat area */}
//       <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
//         {messagesDummyData.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex items-end gap-2 mb-4 ${
//               msg.senderId === '680f50e4f10f3cd28382ecf9'
//                 ? 'justify-end'
//                 : 'flex-row'
//             }`}
//           >
//             {/* Message bubble */}
//             {msg.image ? (
//               <img
//                 src={msg.image}
//                 alt=""
//                 className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
//               />
//             ) : (
//               <p
//                 className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg break-all bg-violet-500/30 text-white ${
//                   msg.senderId === '680f50e4f10f3cd28382ecf9'
//                     ? 'rounded-br-none'
//                     : 'rounded-bl-none'
//                 }`}
//               >
//                 {msg.text}
//               </p>
//             )}

//             {/* Avatar + timestamp */}
//             <div className="text-center text-xs">
//               <img
//                 src={
//                   msg.senderId === '680f50e4f10f3cd28382ecf9'
//                     ? assets.avatar_icon
//                     : assets.profile_martin
//                 }
//                 alt=""
//                 className="w-7 h-7 rounded-full "
//               />
//               <p className="text-gray-500">{msg.createdAt}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ) : (
//     // Default screen
//     <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
//       <img src={assets.logo_icon} alt="logo" className="w-16" />
//       <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
//     </div>
//   )
// }

// export default ChatContainer

