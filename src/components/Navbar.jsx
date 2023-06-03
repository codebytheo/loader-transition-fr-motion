import {motion} from "framer-motion"

function Navbar() {
  const navbarAnimation = {
    hidden:{
      y:-50,
    },
    show:{
      y:0,
      transition:{
        delay:2.2,
        duration:0.5
      }
    }
  }
  return (
    <motion.nav 
      variants={navbarAnimation}
      initial="hidden"
      animate="show"
      className="flex justify-between items-center px-12 py-4">
      <h1 className="font-bold text-xl text-green-700">NATUR</h1>
      <ul className="flex justify-between w-[300px]">
          <li><a href="#" className="font-semibold">Product</a></li>
          <li><a href="#" className="font-semibold">About</a></li>
          <li><a href="#" className="font-semibold">Contact</a></li>
      </ul>
      <h1 className="font-semibold underline underline-offset-8">Testimony</h1>
    </motion.nav>
  )
}

export default Navbar