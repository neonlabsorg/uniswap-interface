import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import {Button} from './Button'
export const Stub = () => {
  return <div className="w-full h-screen p-8 bg-stub-grey flex items-center justify-center">
    <div className='max-w-xl flex flex-col items-center justify-center h-screen relative'>
      <div className='mb-8'>
        <Logo/>
      </div>
      <div className='text-center'>
        <h1 className='text-2xl mb-1'>{`Neonswap isn’t here anymore`}</h1>
        <h2 className='mb-12'>You can swap NEON tokens on <strong>MoraSwap</strong> or use the <strong>Faucet</strong> for airdrops.</h2>
      </div>
      <div className='flex'>
        <Button to='https://moraswap.com'
          className='mr-3'>Visit MoraSwap</Button>
        <Button to='https://neonfaucet.org/'>Visit Faucet</Button>
      </div>
      <div className='text-center absolute bottom-8'>
      Neonswap repositories archive on <a href='https://github.com/neonlabsorg/uniswap-interface' target="_blank" rel='noopener noreferrer' className='text-blue font-bold'>Github</a>
      </div>
    </div>
  </div>
}