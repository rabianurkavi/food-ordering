import { useState } from "react"
import {FaUserAlt,FaSearch,FaShoppingCart} from "react-icons/fa"
import{GiHamburgerMenu} from "react-icons/gi"
import{AiFillCloseCircle} from "react-icons/ai"
import Logo from "../ui/Logo"
import Search from "../ui/Search"
import { useRouter } from "next/router"
import Link from "next/link"


const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  const[isMenuModal,setIsMenuModal] =useState(false);

  const router =useRouter();


  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`} >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
            <Logo/>
        <nav 
        className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen
         sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden
         ${isMenuModal === true && "!grid place-content-center" }`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menü</Link>
            </li>
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">Hakkında</Link>
            </li>
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Rezervasyon</Link>
            </li>
          </ul>
          {isMenuModal&&(
            <button className="absolute top-4 right-4 z-50 " onClick={()=>setIsMenuModal(false)}>
            <AiFillCloseCircle size={30} className="text-black transition-all hover:text-primary"/>
         </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary cursor-pointer"/>         
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary cursor-pointer"/>
          </a>
          <button onClick={()=>setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary cursor-pointer"/>
          </button>
          <a href="#" className="md:inline-block hidden sm">
             <button className="btn-primary">Siparişlerim</button>
          </a>
          <button className="sm:hidden inline-block" onClick={()=>setIsMenuModal(true)}>
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
          
        </div>
      </div>
      {isSearchModal && (
       <Search setIsSearchModal={setIsSearchModal}/>
      )}
    </div>
  )
}

export default Header