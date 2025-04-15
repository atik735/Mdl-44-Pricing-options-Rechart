import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/Pricing-Option/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import MarksChart from './Components/MarksChart/MarksChart'
import axios from 'axios'


const pricingPromise = fetch('pricingData.json').then(res => res.json())

const MarksPromise = axios.get('marksData.json')

function App() {
  return (
    <>
    <header>
    <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={  <div className="flex justify-center pt-5">
    <span className="loading loading-spinner loading-xl"></span>
  </div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={  <div className="flex justify-center pt-5">
    <span className="loading loading-spinner loading-xl"></span>
  </div>}>
          <MarksChart MarksPromise={MarksPromise}></MarksChart>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
    </>
  )
}

export default App
