import { Search, Phone, Mail, Send } from "lucide-react"
import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"

export default function Navbar() {
const [hidden, setHidden] = useState(false)
 const menuRef = useRef(null);
   const inputRef = useRef();
const navigate=useNavigate()
const handleFocus = () => {
  setHidden(true)
}
const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };


  return (
    <nav className="bg-white shadow-sm px-4 py-8 md:py-3 sticky top-0 z-40 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
         <img src="/imgs/maximtrip-logo.png" alt="Logo" className="w-50 " />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <form className="relative w-full" onSubmit={handleSearch}>
            <Search className={` ${hidden && "hidden"}  absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
             <div className={` ${hidden && "hidden"}  absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400`}>
                <TypeAnimation
                        
                          sequence={[
                              // Same substring at the start will only be typed out once, initially
                              'Search "Kashmir Dream Horizons"',
                              1000, // wait 1s before replacing "Mice" with "Hamsters"
                              'Search "Kashmir Treasures of Nature Tour"',
                              1000,
                              'Search "Kashmir Royal Experience "',
                              1000,
                              'Search "Kerala Backwaters"',
                              1000,
                              'Search "Himachal Highlights "',
                            
                          ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                         </div>
                        <input
                          type="text"
                          placeholder=""
                          className="w-full  pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none z-10 absolute -top-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          onFocus={handleFocus}
                          ref={inputRef} 
                        />
             
          </form>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">+91- 9797996205</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">holiday@maximtrip.in</span>
          </div>
          <Link to="/contact" className="bg-[#ce3c3d] p-2 rounded-full">
            <Send className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div> */}
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mt-3">
       <div className="relative w-full my-10">
            <Search className={` ${hidden && "hidden"}  absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
             <div className={` ${hidden && "hidden"}  absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400`}>
                <TypeAnimation
                        
                          sequence={[
                              // Same substring at the start will only be typed out once, initially
                              'Search "Kashmir Dream Horizons"',
                              1000, // wait 1s before replacing "Mice" with "Hamsters"
                              'Search "Kashmir Treasures of Nature Tour"',
                              1000,
                              'Search "Kashmir Royal Experience "',
                              1000,
                              'Search "Kerala Backwaters"',
                              1000,
                              'Search "Himachal Highlights "',
                            
                          ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                         </div>
                        <input
                          type="text"
                          placeholder=""
                          className="w-full  pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none z-10 absolute -top-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          onFocus={handleFocus}
                        />
             
          </div>
      </div>
    </nav>
  )
}
