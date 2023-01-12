import React, { FunctionComponent } from "react";
import { Roboto } from "@next/font/google";
import Image from "next/image";
import webflow from "../assets/images/webflow.png";
import relume from "../assets/images/Black.png";

const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });

const Partners: FunctionComponent = () => {
  return (
    <section className="text-center py-20 bg-black text-white">
      <h5 className={`${roboto.className} text-lg`}>Partners</h5>
      <div className="flex gap-16 pt-12">
        <Image alt="webflow logo" src={webflow} />
        <Image alt="relume logo" src={relume} />
        <Image alt="webflow logo" src={webflow} />
        <Image alt="relume logo" src={relume} />
        <Image alt="webflow logo" src={webflow} />
        <Image alt="relume logo" src={relume} />
        <Image alt="webflow logo" src={webflow} />
        <Image alt="relume logo" src={relume} />
        <Image alt="webflow logo" src={webflow} />
        <Image alt="relume logo" src={relume} />
        <Image alt="webflow logo" src={webflow} />
        <Image alt="relume logo" src={relume} />
      </div>
    </section>
  );
};

export default Partners;
