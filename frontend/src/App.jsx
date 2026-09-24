import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import StoreList from './pages/StoreList'
import StoreDetail from './pages/StoreDetail'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/store" element={<StoreList />} />
        <Route path="/store/:storeId" element={<StoreDetail />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:categorySlug" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        {/* Any unmatched route also lands on Coming Soon rather than a blank 404 */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  )
}
