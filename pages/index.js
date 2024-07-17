// pages/index.js
import Layout from '../components/Layout'
import Header from "../components/Header"
import Showcase from "../components/Showcase"
import CallToAction from '../components/CallToAction/CallToAction'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Questionnaire from "../components/CallToAction/Questionnaire"
import FeaturedWorks from "../components/FeaturedWorks"
import Packages from "../components/Packages"

export default function Home() {
  return (
      <div>
        <Nav />
        <Header />
        <Showcase />
        <FeaturedWorks />
        <Packages />
        <CallToAction />
        <Questionnaire />
        <Footer />
      </div>
  )
}
