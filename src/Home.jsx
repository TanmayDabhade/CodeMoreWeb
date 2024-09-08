// Home.js
import Header from './components/normal/Header'
import Hero from './components/home/Hero'


export default function Home() {
  return (
    <div className="bg-white flex-col items-center">
      <Header />
      <Hero />
    </div>
  )
}
