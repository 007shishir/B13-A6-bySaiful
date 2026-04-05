import React, { Suspense } from 'react'
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
import EmptyCart from './Componants/Main/EmptyCart'


  const   fetchToolsData = async () => {
    const res = await fetch('/toolsData.json');
    return await res.json();
  }

function App() {

  const [productBtn, setProductBtn] = React.useState(true);

  const toolsPromise = fetchToolsData();

  return (
    <>
      <Navbar>  </Navbar>
      <Hero/>
      <UserN/>
      <ToolsHeader productBtn={productBtn} setProductBtn={setProductBtn}/>

      <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>}>
        
        {
          productBtn ? <ToolsData toolsPromise={toolsPromise}/> : <EmptyCart/>
        }
      </Suspense>

      <GetStarted/>
      <PackagePrice/>
      <ReadytoJoin/>
      <Footer/>
    </>
  )
}

export default App
