import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import PromoGrid from './components/PromoGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <PromoGrid />
      </main>
      <Footer />
    </div>
  )
}
