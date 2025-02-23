import { useState } from "react"
import { NavigateMobile } from "./components"
import { Backbone, CustomerSupport, Footer, FooterBanner, Header, HeaderBanner, PaymentCta } from "./sections"

function App() {
  const [showMenu , setShOwmenu] = useState(false)

  return (
    <main className="max-w-screen-2xl mx-auto pb-10">
      
      <Header onClick={() => setShOwmenu(v => !v)} />
     {showMenu && <NavigateMobile onClick={() => setShOwmenu(v => !v)} />}
      <HeaderBanner />
      <CustomerSupport />
      <Backbone />
      <PaymentCta />
      <FooterBanner />
      <Footer />
    </main>
   
  )
}

export default App
