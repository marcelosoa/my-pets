import { useState } from 'react'
import { Overlay } from './styled'
import ReactDOM from 'react-dom'

interface LoadingProps {
  isLoading: boolean
}

export default function LoaderComponent ({ isLoading }: LoadingProps) {
  if (!isLoading) {
    return null
  }
  const portalDiv = document.getElementById('loader-root')!
  return ReactDOM.createPortal(
    <Overlay>
      <div className='loader' />
    </Overlay>,
    portalDiv
  )
}
