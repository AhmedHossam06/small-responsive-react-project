import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
createRoot(document.getElementById('root')).render(
  <>
  <Navbar />
  <Section1 />
  <Section2/>
  </>
)
