

export default function CustomerSupport() {
  return (
    <section className="bg-main">
    <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 ">
      <div className="sm:mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">

        {
            Items.map((item, index, rest) => (
                <div key={item.id} className="sm:break-inside-avoid">
                <blockquote className="rounded-lg  p-6 shadow-xs sm:p-8 space-y-2">
                  <div className="w-10 aspect-square rounded-full bg-mainwine flex justify-center items-center">
                    {item.avatar}
                  </div>

                  <div className={index + 1 !== rest.length ? `border-b-2 pb-7 sm:pb-0 sm:border-b-0 sm:border-r-2  border-disable/80` : ""}>
                <p className="mt-0.5 text-md sm:text-lg font-medium text-white/85 ">{item.title}</p>
                  <p className="mt-2 text-disable/95">{item.text}</p>

                  </div>

                </blockquote>
              </div>
            ))
        }

      </div>
    </div>
  </section>
  )
}


const Lock = <svg width="20" height="20" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0791 17.1402V13.7875C10.0791 8.23885 11.7554 3.72949 20.1371 3.72949C28.5188 3.72949 30.1952 8.23885 30.1952 13.7875V17.1402" stroke="#292D32" stroke-width="2.51451" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.1371 31.389C22.4517 31.389 24.328 29.5127 24.328 27.1982C24.328 24.8836 22.4517 23.0073 20.1371 23.0073C17.8226 23.0073 15.9463 24.8836 15.9463 27.1982C15.9463 29.5127 17.8226 31.389 20.1371 31.389Z" stroke="#292D32" stroke-width="2.51451" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.5186 37.2562H11.7552C5.04988 37.2562 3.37354 35.5799 3.37354 28.8745V25.5218C3.37354 18.8165 5.04988 17.1401 11.7552 17.1401H28.5186C35.224 17.1401 36.9003 18.8165 36.9003 25.5218V28.8745C36.9003 35.5799 35.224 37.2562 28.5186 37.2562Z" stroke="#292D32" stroke-width="2.51451" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

const Headphone = <svg width="20" height="20" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.41335 31.372V26.4771C9.41335 24.8511 10.6874 23.3926 12.4978 23.3926C14.1239 23.3926 15.5823 24.6667 15.5823 26.4771V31.1876C15.5823 34.4565 12.8666 37.1722 9.59775 37.1722C6.32889 37.1722 3.61322 34.4397 3.61322 31.1876V20.8614C3.42882 11.4403 10.8718 3.81299 20.2928 3.81299C29.7138 3.81299 37.14 11.4403 37.14 20.677V31.0032C37.14 34.2721 34.4243 36.9878 31.1555 36.9878C27.8866 36.9878 25.171 34.2721 25.171 31.0032V26.2927C25.171 24.6667 26.445 23.2082 28.2554 23.2082C29.8815 23.2082 31.3399 24.4823 31.3399 26.2927V31.372" stroke="#292D32" stroke-width="2.51451" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const Clock = <svg width="20" height="20" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.8508 22.493C39.8508 32.4028 31.8081 40.4455 21.8983 40.4455C11.9885 40.4455 3.9458 32.4028 3.9458 22.493C3.9458 12.5832 11.9885 4.54053 21.8983 4.54053C31.8081 4.54053 39.8508 12.5832 39.8508 22.493Z" stroke="#292D32" stroke-width="2.69287" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.5585 28.2012L22.9932 24.88C22.0238 24.3055 21.2339 22.9232 21.2339 21.7922V14.4316" stroke="#292D32" stroke-width="2.69287" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


const Items = [
  {
      id: 1,
      title: "Solve problem real time",
      text: "Wich is appraximately 56% of the consumer population of the us",
      avatar:  Clock
  },
  {
      id: 2,
      title: "Secured & safe Payments",
      text: "The lagest adopter due to being comfortable with technology",
      avatar:  Lock
     
  },
  {
      id: 3,
      title: "24/7 Customer support",
      text: "The online payment system offer electronic alternatives yo traditional",
     
      avatar:  Headphone
  },
]