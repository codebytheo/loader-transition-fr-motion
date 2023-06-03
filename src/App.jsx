import Loader from "./components/Loader"
import Navbar from "./components/Navbar"

import { useState } from "react"
import {motion} from "framer-motion"

function App() {
  const [showLoader,setShowLoader] = useState(true)

  const textAnimation = {
    hidden:{
      y:"100%",
    },
    show:{
      y:0,
      transition:{
        delay:1.4,
        duration:1,
        ease: [0.25, 0.4, 0.25, 1],
      }
    }
  }

  const imageReveal = {
    hidden:{
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    },
    show:{
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition:{
        delay:.7,
        duration:1.3,
        ease: [0.25, 0.4, 0.25, 1],
      }
    }
  }

  return (
    <>
      {
        showLoader ? (
          <Loader setShowLoader={setShowLoader} />
        ) : (
          <>
            <Navbar />
            <div className="relative flex flex-col items-center h-[400px] px-12">
              <div className="overflow-hidden">
                <motion.h1 
                  variants={textAnimation}
                  initial="hidden"
                  animate="show"
                  className="text-[#0e0e0e] text-[100px] font-bold text-center relative z-10 drop-shadow-xl">EXPLORE <span className="text-green-700 underline underline-offset-4">NATURE</span> </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  variants={textAnimation}
                  initial="hidden"
                  animate="show"
                  className="text-[#0e0e0e] text-[100px] font-bold text-center relative z-10 drop-shadow-xl">WORLD</motion.h1>
              </div>
              
              <motion.img 
                variants={imageReveal}
                initial="hidden"
                animate="show"
                src="img/img2.webp" 
                alt="nature" 
                className="w-1/4 absolute top-[180px] left-[100px]" />
              <motion.img 
                variants={imageReveal}
                initial="hidden"
                animate="show"
                src="img/img3.webp" 
                alt="nature" 
                className="w-1/4 absolute top-[140px] right-[100px]" />
            </div>
            <div  className="flex justify-center mt-8">
              <motion.img
                layoutId="smooth-transition"
                transition={{duration:1.6,ease: [0.25, 0.4, 0.25, 1]}}
                src="/img/img1.webp" 
                alt="nature" 
                className="w-11/12" />
            </div>
          </>
        )
      }
    </>
  )
}

export default App
