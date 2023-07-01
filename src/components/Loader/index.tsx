import { useState } from 'react'
import { Overlay } from './styled'
import ReactDOM from 'react-dom'

export default function LoaderComponent () {
  // const [loading, setLoading] = useState<boolean>()
  return ReactDOM.createPortal(
    <Overlay>
      Hello World
    </Overlay>,
    document.getElementById('loader-root')
  )
}
