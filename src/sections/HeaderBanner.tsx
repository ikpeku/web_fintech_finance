import { Banner } from "../assets";

export default function HeaderBanner() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 px-4  sm:px-6 lg:px-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-4xl font-semibold text-main sm:text-7xl text-center md:text-start">
            The next gen <br />
            payment <br /> method.
          </h2>

          <p className="mt-4 text-disable/90 text-center md:text-start sm:max-w-md">
            Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
            viverra libero est n
          </p>

          <div className="mt-4 flex justify-center sm:justify-start">
            <a
              href="#"
              className="block w-fit rounded-lg bg-main px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-main/80 focus:ring-3 focus:outline-hidden "
            >
              Get your card
            </a>
          </div>

          <div className="mt-4">
            <div className="flex sm:max-w-sm flex-col sm:flex-row items-center gap-5 ">
              <div className="sm:break-inside-avoid flex items-center">
                <blockquote className="rounded-lg  space-y-2 ">
                  <div className={`flex items-center gap-5`}>
                    <p className="mt-0.5 text-md sm:text-2xl font-medium text-main ">
                      2943
                    </p>

                    <p className="mt-2 text-disable/95">
                      Cards <br />
                      delivered
                    </p>
                  </div>
                </blockquote>
              </div>

              {/* divider */}

              <div className="w-16 h-0.5 sm:h-10 sm:w-0.5  bg-disable/85 " />

              {/* divider ends */}

              <div className="sm:break-inside-avoid flex items-center">
                <blockquote className="rounded-lg  space-y-2 ">
                  <div className={`flex items-center gap-5`}>
                    <p className="mt-0.5 text-md sm:text-2xl font-medium text-main ">
                      2943
                    </p>

                    <p className="mt-2 text-disable/95">
                      Cards <br />
                      delivered
                    </p>
                  </div>
                </blockquote>

                {/* {
    Items.map((item, index, rest) => (


       

        {/* <div className={index + 1 !== rest.length ? ` border-b-2 pb-7 sm:pb-0 sm:border-b-0 sm:border-r-2  border-disable/80 w-1/2 h-1/2 ` : ""} /> */}

                {/* <div className={index + 1 !== rest.length ? `block sm:hidden border-b-2 pb-7 sm:pb-0 sm:border-b-0 sm:border-r-2  border-disable/80  w-1/2 ` : ""} /> */}

                {/* <div className="w-3 bg-red-800" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={Banner} className="object-contain" />
      </div>
    </section>
  );
}
