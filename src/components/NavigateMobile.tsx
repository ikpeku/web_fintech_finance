import { routesProduct } from "../utils";


export default function NavigateMobile({onClick}: {onClick: () => void}) {
  return (
    <div
            className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              {
                routesProduct.map(item => (
                  <button
                  onClick={onClick}
                  key={item}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  {item}
                </button>
                ))
              }
             
            </div>

          

          </div>


  )
}
