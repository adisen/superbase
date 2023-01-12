import { Prosto_One, Rokkitt } from "@next/font/google";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import monkey1 from "../assets/images/monkey1.png";
import monkey2 from "../assets/images/monkey2.png";
import monkey3 from "../assets/images/monkey3.png";

const prostoOne = Prosto_One({ weight: ["400"], subsets: ["latin"] });
const rokkit = Rokkitt({ weight: ["400"], subsets: ["latin"] });

const Collectibles: FunctionComponent = () => {
  return (
    <section className="pt-36 text-center bg-no-repeat bg bg-[url('../assets/images/bg2.png'),_url('../assets/images/bg3.png')] bg-[position:left_-15px_top_-565px,right_351px_bottom_500px]">
      <div className="pb-36">
        <h3 className={`${prostoOne.className} text-4xl mb-12 w-1/3 mx-auto`}>
          A new wave of collectibles is about to hit the blockchain.
        </h3>
        <p className={`${rokkit.className} text-lg mx-auto w-1/3`}>
          Characterised by soft lighting, vintage colour schemes and quirky
          costumes, these generative 3D TinyFaces are the addition to your NFT
          collection you’ve been waiting for.
        </p>
      </div>
      <div className="flex gap-10">
        <Image alt="Monkey 3" src={monkey3} />
        <Image alt="Monkey 1" src={monkey1} />
        <Image alt="Monkey 2" src={monkey2} />
        <Image alt="Monkey 1" src={monkey1} />
      </div>
    </section>
  );
};

export default Collectibles;
