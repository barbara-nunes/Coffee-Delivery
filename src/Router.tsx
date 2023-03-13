import { Routes, Route } from 'react-router-dom'
import { Checkout } from './components/Page/Checkout'
import { Finished } from './components/Page/Finished'
import { Home } from './components/Page/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Finished" element={<Finished />} />
    </Routes>
  )
}
