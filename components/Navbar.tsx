import { Roboto } from "@next/font/google";
import Link from "next/link";
import { FunctionComponent } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const Navbar: FunctionComponent = () => {
  return (
    <header className="bg-black text-white py-[20px] px-[109px] flex justify-between">
      <h1 className={`${roboto.className} text-xl uppercase`}>Superare</h1>
      <div>
        <ul className="flex justify-between text-base gap-10">
          <li>
            <Link href="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/team">About</Link>
          </li>
          <li>
            <Link href="/wallet">Wallet</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
