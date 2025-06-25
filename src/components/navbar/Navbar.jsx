"use client"

import { AuthContext } from "@/context"
import { Search, Phone, Mail, Send } from "lucide-react"
import { useState, useRef, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const { categoryData } = useContext(AuthContext)
  const menuRef = useRef(null)
  const inputRef = useRef()
  const dropdownRef = useRef()
  const navigate = useNavigate()

  const handleFocus = () => {
    setHidden(true)
    setShowDropdown(true)
  }

  const handleBlur = (e) => {
    // Delay hiding dropdown to allow clicking on items
    setTimeout(() => {
      if (!dropdownRef.current?.contains(e.relatedTarget)) {
        setShowDropdown(false)
      }
    }, 150)
  }

  const handleInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() && categoryData) {
      const filtered = categoryData
        .filter((pkg) => pkg.Slug && pkg.Slug.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8) // Limit to 8 results
      setFilteredResults(filtered)
      setShowDropdown(true)
    } else {
      setFilteredResults([])
      setShowDropdown(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const query = inputRef.current.value.trim()
    if (query) {
      navigate(`/holiday/${encodeURIComponent(query)}`)
      setShowDropdown(false)
    }
  }

  const handleResultClick = (pkg) => {
    setSearchQuery(pkg.Slug)
    setShowDropdown(false)
    // Navigate to package detail or search with this Slug
    navigate(`/holiday/${encodeURIComponent(pkg.Slug)}`)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="bg-white shadow-sm px-4 py-1 md:py-3 sticky top-0 z-40 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/imgs/maximtrip-logo.png" alt="Logo" className="w-30 md:w-50 " />
          </Link>
        </div>

        {/* Search Bar */}
        <div className=" md:flex items-center flex-1 max-w-md mx-8 relative ">
          <form className="relative w-full" onSubmit={handleSearch}>
            <Search
              className={`${hidden && "hidden"} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 md:h-5 z-20`}
            />
            <div
              className={`${hidden && "hidden"}  absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 z-20 pointer-events-none  w-[130px] md:w-auto h-7 md:h-auto overflow-hidden `}
            >
              <TypeAnimation
                sequence={[
                  'Search "Kashmir Dream Horizons"',
                  1000,
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
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
            <input
              type="text"
              placeholder=""
              value={searchQuery}
              onChange={handleInputChange}
              className="w-[180px] md:w-full pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none z-10 absolute -top-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={inputRef}
            />
          </form>

          {/* Dropdown Results */}
          {showDropdown && filteredResults.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-80 overflow-y-auto z-50"
            >
              {filteredResults.map((pkg, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleResultClick(pkg)}
                >
                  <div className="flex items-center space-x-3">
                    <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 truncate">{pkg.Slug}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-[12px]">+91- 9797996205</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 text-[12px]">holiday@maximtrip.in</span>
          </div>
          <Link to="/contact" className="bg-[#ce3c3d] p-2 rounded-full">
            <Send className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      {/* <div className="md:hidden mt-3">
        <div className="relative w-full my-10">
          <Search
            className={`${hidden && "hidden"} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-20`}
          />
          <div
            className={`${hidden && "hidden"} absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 z-20 pointer-events-none`}
          >
            <TypeAnimation
              sequence={[
                'Search "Kashmir Dream Horizons"',
                1000,
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
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
          <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none z-10 absolute -top-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

        
          {showDropdown && filteredResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-80 overflow-y-auto z-50">
              {filteredResults.map((pkg, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleResultClick(pkg)}
                >
                  <div className="flex items-center space-x-3">
                    <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 truncate">{pkg.Slug}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div> */}
    </nav>
  )
}
