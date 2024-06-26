// pages/index.js
import Layout from '../components/Layout'
import Header from "../components/Header"
import Showcase from "../components/Showcase"
import CallToAction from '../components/CallToAction'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Questionnaire from "../components/Questionnaire"

export default function Home() {
  return (
    
      <div>
        <div className="px-10">
          <Nav />
          <Header />
        </div>
        <Showcase />
        <CallToAction />
        <Questionnaire />
        <Footer />
      </div>
    
  )
}
