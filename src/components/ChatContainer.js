import React, { useEffect } from 'react';
import LiveChat from './LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../utils/chatSlice';
import { generate, generateMessage } from '../utils/nameGenerator';

const ChatContainer = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((appStore) => appStore.chat.messages);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      dispatch(
        addChatMessage({
          name: generate(),
          message: generateMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(chatInterval);
    };
  }, [dispatch]);

  return (
    <div className='w-full border h-[6%] mb-6 mt-4 p-2 overflow-y-scroll  flex flex-col-reverse'>
      <div>
      <input type='text' placeholder='write something...' className='py-1 border-gray-300 w-[80%] mr-3 px-2' ></input>
      <button className='text-green-700 border px-2 rounded'>Send</button>
      </div>
      <span className='font-semibold text-red-600 font'>Live Chat 🗨️🗨️</span>
        
      {chatMessages.map((message, index) => (
        <LiveChat key={index} data={message} />
      ))}

     <div>
     adsfdsa
     </div>
    </div>
  );
};

export default ChatContainer;
