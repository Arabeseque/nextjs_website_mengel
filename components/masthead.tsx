import React, {useRef, useContext, useState, useCallback} from "react";
import Image from "next/image";
import { ScrollContent } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoad] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContent);
  let progess = 0
  const {current: elContainer} = refContainer;
  if (elContainer) {
    progess = Math.min(1, scrollY / elContainer.clientHeight);
  }
  const handleImageLoad = useCallback(() => {
    setImageLoad(true);
  }, [])


  return (
    <div
      ref={refContainer} 
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen -z-10"
      style={{
        transform: `translateY(-${progess * 20}vh)`,
      }}
    >
      <video autoPlay loop muted playsInline className="absolute object-cover w-full h-full">
        {/* <source src="/assets/sea.m4a" type="video/mp4; codecs=hvc1" /> */}
        {/* <source src="/assets/sea.webm" type="video/webm; codecs=vp9" /> */}
        <source src="/assets/banner-video-pc.mp4" type="video/mp4;" />
      </video>
      <div 
        className={`flex-grow-0 pt-10 transition-opacity duration-1000
          ${imageLoaded ? "opacity-100" : "opacity-0"}`
      }
      >
        <Image 
          src="/assets/logo.svg"
          width= {128 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Mango</h1>
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <span>App Development</span> <span>done right.</span>
        </h2>
      </div>
      <div className={`flex-grow-0 pb-20 transition-all duration-1000 md:pb-10
        ${imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"}`
      }>
        <Image
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
          alt="arrow down"
          onLoad={handleImageLoad}
        >

        </Image>
      </div>
    </div>
  )
}

export default Masthead;
