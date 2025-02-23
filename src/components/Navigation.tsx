
import { routesProduct } from "../utils";

export default function Navigation() {
  return (
    <ul className="flex items-center gap-6 text-sm">
      {routesProduct.map((item) => (
        <li key={item}>
          <a
            className="text-[#343434] font-[Inter] font-medium text-xs sm:text-base transition hover:text-[#343434]/75"
            href="#"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
