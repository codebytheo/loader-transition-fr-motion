import {motion} from 'framer-motion'

const Loader = ({setShowLoader}) => {
  
  const textReveal = {
    hidden:{
      opacity: 0,
    },
    show:{
      opacity:1,
      transition:{
        duration:1,
      }
    }
  }
  const imageLoader = {
    hidden:{
      opacity: 0,
      y:200
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:1.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <motion.div       
      className="h-screen w-screen fixed top-0 left-0 bg-[#eaeaea] flex flex-col items-center py-8 z-50">
        <motion.h1 
          variants={textReveal}
          initial="hidden"
          animate="show"
          className="text-center text-[#0e0e0e] text-5xl font-semibold">Welcome to this website</motion.h1>
        <motion.div
          variants={imageLoader}
          initial="hidden"
          animate="show"
          onAnimationComplete={() => setShowLoader(false)}
        >
          <motion.img
            layoutId="smooth-transition"
            src="/img/img1.webp" 
            alt="nature img" 
            className="w-1/2 mt-12 m-auto" />
        </motion.div>
    </motion.div>
  )
}

export default Loader