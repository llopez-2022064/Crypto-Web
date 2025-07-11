import { useState } from 'react'
import './App.css'
import { useCrypto } from './hooks/useCrypto'
import { toast, Toaster } from 'sonner'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [copied, setCopied] = useState(false)
  const { crypto, decrypt, isLoading } = useCrypto()

  const handleCopy = async () => {

    if(!result || result.trim() === ''){
      toast.warning('No text')
      return
    }

    await navigator.clipboard.writeText(result)
    toast.success('Copied text')
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleEncrypt = async (e) => {
    e.preventDefault()

    if(!text || text.trim() === ''){
      toast.warning('Please enter the text')
      return
    }

    toast.info('The server may take a few seconds to wake up...')

    const loadingToast = toast.promise(
      crypto(text),
      {
        loading: 'Encrypting...',
        success: (res) => {
          setResult(res.result)
          return 'Decrypted successfully!'
        },
        error: 'Failed to encrypt, try again.'
      }      
    )
    await loadingToast
  }

  const handleDescrypt = async (e) => {
    e.preventDefault()

    if(!text || text.trim() === ''){
      toast.warning('Please enter the text')
      return
    }

    toast.info('The server may take a few seconds to wake up...')

    const loadingToast = toast.promise(
      decrypt(text),
      {
        loading: 'Decrypting...',
        success: (res) => {
          setResult(res.result)
          return 'Decrypted successfully!'
        },
        error: 'Failed to decrypted, try again.'
      }
    )
    
    await loadingToast
  }

  return (
    <>
      <Toaster position="top-center" richColors />
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-6 icon icon-tabler icons-tabler-outline icon-tabler-lock-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M8 11v-5a4 4 0 0 1 8 0" /></svg>
                </div>
                <input value={text} onChange={handleChange} className='w-full ps-12 py-2.5 rounded-xl bg-gray-300 focus:ring-blue-500 focus:border-blue-500' type="text" id='password' placeholder='************' required />
              </div>
            </div>

            <div>
              <label htmlFor="result" className='font-semibold'>Result</label>
              <div className='relative w-full my-2'>
                <div className='absolute inset-y-0 start-0 ps-3 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>
                </div>
                <button className='absolute inset-y-0 end-0 pe-3 flex items-center cursor-pointer bg-gray-300 rounded-xl' onClick={handleCopy}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                </button>
                <input id='result' value={result} className='w-full ps-12 py-2.5 rounded-xl bg-gray-300' disabled type="text" />
              </div>
            </div>
          </div>
          <div className='flex justify-around'>
            <button
              disabled={isLoading}
              onClick={handleEncrypt}
              type="button"
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Encrypt
            </button>
            <button
              disabled={isLoading}
              onClick={handleDescrypt}
              type="button"
              className="cursor-pointer text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-gray-700 dark:border-gray-700">
              Decrypt
            </button>
            <button
              disabled={isLoading}
              onClick={() => { setResult(''); setText('') }}
              type="button"
              className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
