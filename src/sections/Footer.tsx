import Navigation from "../components/Navigation";
// lg:pt-24
// py-16

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] px-4  sm:px-6 lg:px-8 ">

      <div className="lg:flex lg:items-center lg:justify-between pb-3 sm:pb-10">
        <div className="">
          <h2 className="font-[Plus Jakarta Sans] text-xl sm:text-4xl font-bold text-main">
            Make secure <br /> payment & grow <br /> your online business
          </h2>
        </div>

        <div>
          <ul className="mt-8 sm:mt-0 space-y-4 text-sm">
            <li>
              <a
                className="flex items-center justify-center gap-4 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6201 6.95C16.5701 2.33 12.5401 0.25 9.0001 0.25C9.0001 0.25 9.0001 0.25 8.9901 0.25C5.4601 0.25 1.4201 2.32 0.370095 6.94C-0.799905 12.1 2.3601 16.47 5.2201 19.22C6.2801 20.24 7.6401 20.75 9.0001 20.75C10.3601 20.75 11.7201 20.24 12.7701 19.22C15.6301 16.47 18.7901 12.11 17.6201 6.95ZM9.0001 11.96C7.2601 11.96 5.8501 10.55 5.8501 8.81C5.8501 7.07 7.2601 5.66 9.0001 5.66C10.7401 5.66 12.1501 7.07 12.1501 8.81C12.1501 10.55 10.7401 11.96 9.0001 11.96Z"
                    fill="#292D32"
                  />
                </svg>

                <address className="-mt-0.5 flex-1 not-italic text-[#7E7E7E]">
                  8502 presston Rd.inglewood <br /> maine 98380 usa
                </address>
              </a>
            </li>

            <li 
            className="flex items-start justify-center gap-4 ltr:sm:justify-start rtl:sm:justify-end sm:ml-10"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 4H7C4 4 2 5.5 2 9V16C2 19.5 4 21 7 21H17C20 21 22 19.5 22 16V9C22 5.5 20 4 17 4ZM17.47 10.09L14.34 12.59C13.68 13.12 12.84 13.38 12 13.38C11.16 13.38 10.31 13.12 9.66 12.59L6.53 10.09C6.21 9.83 6.16 9.35 6.41 9.03C6.67 8.71 7.14 8.65 7.46 8.91L10.59 11.41C11.35 12.02 12.64 12.02 13.4 11.41L16.53 8.91C16.85 8.65 17.33 8.7 17.58 9.03C17.84 9.35 17.79 9.83 17.47 10.09Z"
                  fill="#292D32"
                />
              </svg>

              <span className="flex-1 text-[#7E7E7E] font-[Inter] text-">Support@fintech.co</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-disable pt-8 sm:flex sm:items-center sm:justify-between ">
        <Navigation />
      </div>
    </footer>
  );
}
