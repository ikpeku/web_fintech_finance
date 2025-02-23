

export default function FooterBanner() {
  return (
  <section
    className=" px-4 space-y-8 sm:space-y-0 sm:px-6 lg:flex  lg:items-center lg:px-8 py-8 sm:py-16 "
  >
    <div className="max-w-2xl sm:w-2xl">
    <div className="sm:w-lg">
      <h1 className="text-lg font-bold sm:text-5xl text-main text-center sm:text-start">
      Ready to get started ?
      </h1>

      <p className="mt-4 max-w-lg text-xs sm:text-sm/relaxed text-disable text-center sm:text-start">
      Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n
      </p>

      <div className="mt-8 flex  gap-4 text-center ">
        <a
          href="#"
          className="block w-full rounded-sm bg-main sm:px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-main/80 focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Join now
        </a>

        <a
          href="#"
          className="block w-full border rounded-sm bg-white sm:px-12 py-3  text-sm font-medium text-main shadow-sm hover:text-main/80 focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>

    </div>

    <div className="flex-1 ">
    <div className="sm:mt-8 [column-fill:_balance] sm:columns-2 gap-6 lg:gap-8 sm:space-y-0 space-y-8">

{
    Items.map((item) => (
        <div key={item.id} className="sm:break-inside-avoid ">
        <blockquote className="rounded-lg  p-6 shadow-xs sm:p-8 space-y-2 border border-disable/50">
          <div className="w-14 aspect-square rounded-lg bg-main flex justify-center items-center">
            {item.avatar}
          </div>

         
        <p className="mt-0.5 text-md sm:text-lg font-medium text-main ">{item.title}</p>
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



const Lock = <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6113 11.2974C34.1113 13.7299 36.5263 17.5974 37.0163 22.0599" stroke="white" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.03857 22.1473C7.49357 17.7023 9.87357 13.8348 13.3386 11.3848" stroke="white" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.2637 37.145C17.2937 38.1775 19.6037 38.755 22.0362 38.755C24.3812 38.755 26.5862 38.23 28.5637 37.2675" stroke="white" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0364 13.9751C24.7233 13.9751 26.9014 11.797 26.9014 9.11012C26.9014 6.42325 24.7233 4.24512 22.0364 4.24512C19.3495 4.24512 17.1714 6.42325 17.1714 9.11012C17.1714 11.797 19.3495 13.9751 22.0364 13.9751Z" stroke="white" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.38355 35.3599C12.0704 35.3599 14.2486 33.1817 14.2486 30.4949C14.2486 27.808 12.0704 25.6299 9.38355 25.6299C6.69669 25.6299 4.51855 27.808 4.51855 30.4949C4.51855 33.1817 6.69669 35.3599 9.38355 35.3599Z" stroke="white" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.4788 35.3599C37.1656 35.3599 39.3438 33.1817 39.3438 30.4949C39.3438 27.808 37.1656 25.6299 34.4788 25.6299C31.7919 25.6299 29.6138 27.808 29.6138 30.4949C29.6138 33.1817 31.7919 35.3599 34.4788 35.3599Z" stroke="white" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


const Headphone = <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.9987 35.5002C32.3437 35.5177 34.6012 34.6427 36.3337 33.0677C42.0562 28.0627 38.9937 18.0177 31.4512 17.0727C28.7562 0.727654 5.18367 6.92265 10.7662 22.4802" stroke="white" strokeWidth="2.625" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.671 23.1975C12.7435 22.725 11.711 22.48 10.6785 22.4975C2.52354 23.075 2.54104 34.94 10.6785 35.5175" stroke="white" strokeWidth="2.625" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.6162 17.8073C29.5262 17.3523 30.5062 17.1073 31.5212 17.0898" stroke="white" strokeWidth="2.625" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.6284 35.5H16.6284" stroke="white" strokeWidth="2.625" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.1284 39V32" stroke="white" strokeWidth="2.625" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>



const Items = [
  {
      id: 1,
      title: "Store date on cloud",
      text: "Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor ",
      avatar:  Headphone
  },
  {
      id: 2,
      title: "Connect dots smartly",
      text: "Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor ",
      avatar:  Lock
     
  },

]