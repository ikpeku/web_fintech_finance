
const Items = [
    {
        id: 1,
        title: "1.5M",
        text: "Wich is appraximately 56% of the consumer population of the us"
    },
    {
        id: 2,
        title: "41%",
        text: "The lagest adopter due to being comfortable with technology"
    },
    {
        id: 3,
        title: "3964+",
        text: "The online payment system offer electronic alternatives yo traditional"
    },
]


export default function PaymentCta() {
  return (
    <section className="bg-mainwine">
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-main sm:text-5xl">
      Join millions getting secured payment
      </h2>
  
      <div className="sm:mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">

        {
            Items.map(item => (
                <div key={item.id} className="sm:break-inside-avoid">
                <blockquote className="rounded-lg  p-6 shadow-xs sm:p-8">
                <p className="mt-0.5 text-2xl sm:text-3xl font-medium text-main ">{item.title}</p>
                  <p className="mt-2 text-disable/95">{item.text}</p>
                </blockquote>
              </div>
            ))
        }

       
      </div>
    </div>
  </section>
  )
}
