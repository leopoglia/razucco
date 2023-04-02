import Products from "../components/products"
import Pricing from "../components/pricing"
import Stats from "../components/stats"
import About from "../components/about"
import Footer from "../components/footer"

export default function App() {
  return (
    <div className="app">
      <Pricing />
      <Products />
      <Stats />
      <About />
      <Footer />
    </div>
  )
}
