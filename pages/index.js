// pages/index.js
import Layout from '../components/Layout'
import Header from "../components/Header"
import Showcase from "../components/Showcase"
import CallToAction from '../components/CallToAction'
import Nav from "../components/Nav"


export default function Home() {
  return (
    
      <div>
        <Nav />
        <Header />
        <Showcase />
        <CallToAction />
      </div>
    
  )
}
