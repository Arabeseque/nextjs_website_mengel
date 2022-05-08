import React from "react";
import SliderContainer from "./slider";
import Image from "next/image";

const ClientLogos: React.FC = () => {
  return <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <Image 
        src="/assets/trustedby/rainbow.png"
        width={150}
        height={50}
        alt="Rainbow"
        objectFit="contain"
      />
    </SliderContainer>
  </>
}

export default ClientLogos;
