import Image from "next/image";
import React from "react";
import Magdiel from "../assets/images/Magdiel Lopez 17.png";
const Details = () => {
  return (
    <section>
      <div>
        <h1>Secure the most rare</h1>
        <p>
          Even though no two Tinyfaces will ever be the same, some variations
          are rarer than others. Watch out for special accessories and raw
          materials - the rarer the attributes, the rarer your character will
          be.
        </p>
      </div>
      <div>
        <div>
          <h1>Our environmental impact matters to us.</h1>
          <p>
            In order to enable our community to spend as little as possible in
            gas fees when minting, we opted for a contract made by Azuki called
            ERC721A, which allows minting multiple NFTs for essentially the same
            cost as minting a single one.
          </p>
        </div>
        <Image src={Magdiel} alt="Magdiel Lopez" />
      </div>
    </section>
  );
};

export default Details;
