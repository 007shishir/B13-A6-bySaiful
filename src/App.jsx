import { Suspense } from 'react'
import './App.css'
import Hero from './Componants/header/Hero'
import Navbar from './Componants/header/Navbar'
import ToolsHeader from './Componants/Main/ToolsHeader'
import GetStarted from './Componants/Main/GetStarted'
import UserN from './Componants/Main/UserN'
import ToolsData from './Componants/PlayerUI/ToolsData'
import PackagePrice from './Componants/Main/PackagePrice'
import ReadytoJoin from './Componants/Main/ReadytoJoin'
import Footer from './Componants/footer/Footer'


  const   fetchToolsData = async () => {
    const res = await fetch('/toolsData.json');
    return await res.json();
  }

function App() {

  const toolsPromise = fetchToolsData();

  return (
    <>
      <Navbar>  </Navbar>
      <Hero/>
      <UserN/>
      <ToolsHeader/>

      <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>}>
        <ToolsData toolsPromise={toolsPromise}/>
      </Suspense>

      <GetStarted/>
      <PackagePrice/>
      <ReadytoJoin/>
      <Footer/>
    </>
  )
}

export default App
