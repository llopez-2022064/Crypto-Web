import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full mt-16 mx-auto md:max-w-2xl md:mt-[20%] lg:mt-[2%]'>
        <div className='p-7'>
          <div className='flex flex-col justify-center items-center bg-indigo-500 rounded-t-xl text-white py-10 mb-4'>
            <h1 className='font-bold text-4xl mb-4'>CRYPTO</h1>
            <p className='text-center font-bold inline-block border-b border-text'>Protect your information</p>
          </div>
          <div className='mb-8 space-y-5 md:p-4'>
            <div>
              <label htmlFor="password" className='font-semibold'>Password</label>
              <div className='relative w-full my-2'>
                <div className='absolute inset-y-0 ps-3 start-0 flex items-center'>
                  <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-lock-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M8 11v-5a4 4 0 0 1 8 0" /></svg>
                </div>
                <input className='w-full ps-12 py-2.5 rounded-xl bg-gray-300 focus:ring-blue-500 focus:border-blue-500' type="text" id='password' placeholder='************' required />
              </div>
            </div>

            <div>
              <label htmlFor="result" className='font-semibold'>Result</label>
              <div className='relative w-full my-2'>
                <div className='absolute inset-y-0 start-0 ps-3 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>
                </div>
                <input className='w-full ps-12 py-2.5 rounded-xl bg-gray-300' disabled type="text" />
              </div>
            </div>
          </div>
          <div className='flex justify-around'>
            <button className='px-5 py-2.5 rounded-lg lg:px-14 bg-blue-600 text-xl font-semibold cursor-pointer'>Encrypt</button>
            <button className='px-5 py-2.5 rounded-lg lg:px-14 bg-blue-300 text-xl font-semibold cursor-pointer'>Decrypt</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
