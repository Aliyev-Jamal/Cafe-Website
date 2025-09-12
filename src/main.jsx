import { createRoot } from 'react-dom/client'
import './index.css'
import Wrapper from './components/wrapper'
import Home from './components/home/home'
import About from './components/home/about/about'




createRoot(document.getElementById('root')).render(
  <Wrapper>
    <Home />
  </Wrapper>
)
