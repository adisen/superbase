import { FunctionComponent } from "react";
import { Prosto_One, Lato } from "@next/font/google";
import Image from "next/image";
import Magdiel15 from "../assets/images/15.png";
import Magdiel17 from "../assets/images/Magdiel Lopez 17.png";
import Magdiel18 from "../assets/images/Magdiel Lopez 18.png";

const prostoOne = Prosto_One({ weight: ["400"], subsets: ["latin"] });
const lato = Lato({ weight: ["400"], subsets: ["latin"] });

const carousel = [1, 2, 3];
let currentCarousel = 2;

const Hero: FunctionComponent = () => {
  return (
    <section
      className={`${prostoOne.className} h-[100vh] bg-black text-white flex pb-[130px] bg-no-repeat bg-[url('../assets/images/bg1.png'),_url('../assets/images/bg2.png'),_url('../assets/images/bg3.png'),_url('../assets/images/bg4.png')] bg-[position:left_top,right_360px_bottom_-950px,_right_460px_bottom_-500px,_left_900px_bottom_200px]`}
    >
      <div className="w-1/2  px-[109px] pt-[138px]">
        <h1 className="text-7xl pb-5">Discover and collect super rare NFTs</h1>
        <p className={`${lato.className} text-2xl`}>
          Digital marketplace for crypto collectibles and NFTs.{" "}
        </p>
        <div className="pt-6">
          <button className="mr-3 border-2 py-3 px-7 uppercase border-[#E329AB] rounded-tl-2xl rounded-br-2xl">
            Connect Wallat
          </button>
          <button className="bg-[#E329AB] py-3 px-9 uppercase rounded-tl-2xl rounded-br-2xl">
            Buy
          </button>
        </div>
      </div>
      <div className="w-1/2 self-end">
        <div className="flex">
          <Image
            alt="First NFT imagew"
            key={1}
            src={Magdiel15}
            className="h-[400px] w-[340px] self-center mr-[-200px]"
          />
          <Image
            alt="First NFT image"
            key={2}
            src={Magdiel17}
            className="z-20 w-[340px] h-[430px]"
          />
          <Image
            alt="First NFT image"
            key={3}
            src={Magdiel18}
            className="h-[400px] w-[340px] self-center ml-[-200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
