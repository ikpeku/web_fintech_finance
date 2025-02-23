import { routesProduct } from "../utils";


export default function NavigateMobile() {
  return (
    <ul className="space-y-1 absolute top-0 z-50 w-full">
       {routesProduct.map((item) => (
        <li key={item}>
          <a
            className="block rounded-lg text-[#343434] font-[Inter] font-medium text-sm  sm:text-base transition hover:text-[#343434]/75 px-4 py-2"
            href="#"
          >
            {item}
          </a>
        </li>
      ))}

  {/* <li>
    <a href="#" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
      General
    </a>
  </li> */}

  {/* <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Teams
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Billing
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Invoices
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Account
    </a>
  </li> */}
</ul>
  )
}
