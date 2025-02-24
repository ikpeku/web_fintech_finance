import { Backbonebanner, Wallet } from "../assets";


export default function Backbone() {
  return (
    <section className="max-w-screen-xl mx-auto ">
  <div className=" px-4 py-8 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      <div 
      className="bg-white p-2 md:p-12 lg:px-16 lg:py-16 order-2"
      
      >
        <div className="sm:max-w-md ">
          <h2 className="text-2xl font-bold text-main md:text-3xl">
          A fully integrated suit of payments products
          </h2>

          <p className="text-xs sm:text-base text-disable/90 font-bold mt-4 sm:block">
          Instant payment.electronic payments are much faster than the traditional methods of payments.
           </p>

          <blockquote className=" text-disable/90 mt-4 sm:block text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n        
          </blockquote>

        </div>
      </div>

      <div className="order-1 flex justify-start">
        <img src={Wallet} className="h-40 w-lg object-contain sm:h-56 md:h-full" />
      </div>
    </div>
    {/* wallet stop */}



    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      <div 
      className="bg-white p-2 md:p-12 lg:px-16 lg:py-16 order-2 sm:order-1"
      
      >
        <div className="sm:max-w-md ">
          <h2 className="text-2xl font-bold text-main md:text-3xl">
            The backbone for internet business
          </h2>

          <p className="text-xs sm:text-base text-disable/90 mt-4 sm:block">
          Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n
          </p>

          <blockquote className=" text-disable/90 mt-4 sm:block text-xs sm:text-base">
“simply the best.better than all the rest.recommend
this product to beginner and advanced user”         
 </blockquote>

 

 
    <blockquote className="rounded-lg shadow-xs mt-4">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className=" size-8 sm:size-12 rounded-full object-cover"
          />
          <div>
            
            <p className="text-sm sm:text-lg font-medium text-main">Theresa Webb</p>
            <p className="text-disable/90 text-xs sm:text-base">Director of technology .creativegig</p>
          </div>
        </div>
      </blockquote> 

          
        </div>
      </div>

      <div className="order-1 sm:order-2 flex justify-end">
        <img src={Backbonebanner} className="h-40 w-md object-contain sm:h-56 md:h-full" />
      </div>
    </div>




  </div>
</section>
  )
}
