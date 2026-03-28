import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTopButton from '../components/ScrollToTopButton'

const MainLayout = () => {
  return (
    <div className="relative min-h-screen text-slate-100">
      <Navbar />
      <main className="pb-12">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default MainLayout
