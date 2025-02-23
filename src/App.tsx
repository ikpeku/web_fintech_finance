import { Backbone, CustomerSupport, Footer, Header, PaymentCta } from "./sections"

function App() {

  return (
    <main className="max-w-screen-2xl mx-auto pb-10">
      <Header />
      <CustomerSupport />
      <Backbone />
      <PaymentCta />
      <Footer />
    </main>
   
  )
}

export default App
