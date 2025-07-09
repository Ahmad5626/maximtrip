"use client"

import { useContext, useEffect, useState } from "react"
import {
  Star,
  MapPin,
  ChevronRight,
  Sun,
  Coffee,
  Car,
  Building,
  Eye,
  X,
  Send,
  ChevronDown,
  ChevronUp,
  Home,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/footer/Footer"
import { AuthContext } from "@/context"
import { Link, useParams } from "react-router-dom"
import ScrolltoTop from "@/components/ScrolltoTop"

export default function PackagesListing() {
  const {
    packegesData,
    categoryData,
    HandleSubmitEnquiry,
    isPopupOpen,
    setIsPopupOpen,
    setPopupHeadline,
    popupHeadline,
  } = useContext(AuthContext)
  const [priceRange, setPriceRange] = useState([100, 25799])
  const [selectedDurations, setSelectedDurations] = useState([])
  const [selectedStars, setSelectedStars] = useState([])
  const [selectedRoutes, setSelectedRoutes] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [showFullDetail, setShowFullDetail] = useState(false)
  const [expandedAmenities, setExpandedAmenities] = useState({})
  const [expandedFAQ, setExpandedFAQ] = useState({})
  const { id } = useParams()
  const [activeTabs, setActiveTabs] = useState({})

  const durations = [
    { label: "More 4 Nights 5 Days", value: "5 Days / 4 Nights" },
    { label: "More 2 Nights 3 Days",value: "3 Days / 2 Nights" },
    { label: "More 3 Nights 4 Days",value: "4 Days / 3 Nights" },
    { label: "More 6 Nights 7 Days",value: "7 Days / 6 Nights" },
    { label: "More 7 Nights 8 Days",value: "8 Days / 7 Nights" },
    { label: "More 5 Nights 6 Days" ,value: "6 Days / 5 Nights" },
  ]

  const starRatings = [
    { value: 1, label: "1 Star" },
    { value: 2, label: "2 Star" },
    { value: 3, label: "3 Star" },
    { value: 4, label: "4 Star" },
    { value: 5, label: "5 Star" },
  ]

  const routes = [
    { label: "Jammu to Jammu", count: 8 },
    { label: "Srinagar to Srinagar", count: 4 },
  ]

  const locations = [
    { label: "Jammu & Kashmir", count: 2 },
    { label: "Kashmir", count: 4 },
  ]



 
  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  const toggleDuration = (duration) => {
    setSelectedDurations((prev) => (prev.includes(duration) ? prev.filter((d) => d !== duration) : [...prev, duration]))
  }

  const toggleStar = (star) => {
    setSelectedStars((prev) => (prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]))
  }

  const toggleRoute = (route) => {
    setSelectedRoutes((prev) => (prev.includes(route) ? prev.filter((r) => r !== route) : [...prev, route]))
  }

  const toggleLocation = (location) => {
    setSelectedLocations((prev) => (prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]))
  }

  const toggleAmenity = (packageId, amenityType) => {
    const key = `${packageId}-${amenityType}`
    setExpandedAmenities((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const toggleFAQ = (faqId) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }))
  }

  const truncateHTML = (html, maxLength = 200) => {
    const div = document.createElement("div")
    div.innerHTML = html
    const text = div.textContent || div.innerText || ""
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  useEffect(() => {
    categoryData.forEach((category) => {
      if (category.Slug === id) {
        setSelectedCategories(category)
      }
    })
  }, [categoryData, id])

  const openPopup = (headline) => {
    setIsPopupOpen(true)
    setPopupHeadline(headline)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setPopupHeadline("")
  }
console.table(packegesData)
  // Filter packages based on selected filters
  const filteredPackages = packegesData
    .filter((pkg) => pkg.packageCategory === selectedCategories.categoryName)
    .filter((pkg) => {
      // Price range filter
      if (pkg.bestPrice < priceRange[0] || pkg.bestPrice > priceRange[1]) {
        return false
      }
      
      // Duration filter
      if (selectedDurations.length > 0) {
        const matchesDuration = selectedDurations.includes(pkg.days)
        if (!matchesDuration) return false
      }
      
      // Star rating filter
      if (selectedStars.length > 0) {
        if (!selectedStars.includes(Number(pkg.rating))) return false
      }
      
      // Route filter
      if (selectedRoutes.length > 0) {
        if (!selectedRoutes.includes(pkg.cityRoute)) return false
      }
      
      // Location filter
      if (selectedLocations.length > 0) {
        if (!selectedLocations.includes(pkg.location)) return false
      }
      
      return true
    })

  return (
    <>
      <ScrolltoTop />
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="bg-gray-100 py-3 px-4 rounded-md mb-6">
            <div className="flex items-center text-sm">
              <a href="#" className="text-[#ce3c3d] hover:underline">
                Home
              </a>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-600">{selectedCategories.headline}</span>
            </div>
          </div>

          {/* Page Title and Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {selectedCategories.headline}
                    <span className="ml-2 text-sm font-normal text-[#ce3c3d]">
                      {filteredPackages.length} Packages
                    </span>
                  </h1>
                </div>

                <div className="text-gray-600 mb-2">
                  {showFullDetail ? (
                    <div
                      className="prose prose-gray max-w-none leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedCategories.detail }}
                    />
                  ) : (
                    <div className="prose prose-gray max-w-none leading-relaxed">
                      <div className="line-clamp-3">{truncateHTML(selectedCategories.detail || "", 400)}</div>
                    </div>
                  )}
                </div>

                {selectedCategories.detail && selectedCategories.detail.length > 400 && (
                  <button
                    className="text-[#ce3c3d] hover:text-orange-600 font-medium text-sm flex items-center"
                    onClick={() => setShowFullDetail(!showFullDetail)}
                  >
                    {showFullDetail ? "Read less" : "Read more"}
                    <ChevronRight
                      className={`w-4 h-4 ml-1 transition-transform ${showFullDetail ? "rotate-90" : ""}`}
                    />
                  </button>
                )}
              </div>
              <div className="md:w-1/3">
                <div className="w-full h-full" style={{backgroundImage: `url(${selectedCategories.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
                  {/* <img
                    src={selectedCategories.image || "/placeholder.svg"}
                    alt={selectedCategories.headline}
                    className="object-contain w-full"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="25799"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500">Approx price per person</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Duration</h4>
                  <div className="space-y-2">
                    {durations.map((duration) => (
                      <label key={duration.label} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedDurations.includes(duration.value)}
                          onChange={() => toggleDuration(duration.value)}
                          className="mr-2"
                        />
                        <span className="text-sm">
                          {duration.label} 
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Hotel Star Rating */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Hotel Star Rating</h4>
                  <div className="space-y-2">
                    {starRatings.map((star) => (
                      <label key={star.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedStars.includes(star.value)}
                          onChange={() => toggleStar(star.value)}
                          className="mr-2"
                        />
                        <div className="flex items-center">
                          <span className="text-sm mr-2">{star.label}</span>
                          <div className="flex">{renderStars(star.value)}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Route City */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Route City</h4>
                  <div className="space-y-2">
                    {routes.map((route) => (
                      <label key={route.label} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedRoutes.includes(route.label)}
                          onChange={() => toggleRoute(route.label)}
                          className="mr-2"
                        />
                        <span className="text-sm">
                          {route.label} ({route.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Location</h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <label key={location.label} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(location.label)}
                          onChange={() => toggleLocation(location.label)}
                          className="mr-2"
                        />
                        <span className="text-sm">
                          {location.label} ({location.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Package Listings */}
            <div className="flex-1">
              <div className="space-y-6">
                {filteredPackages.length > 0 ? (
                  filteredPackages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* Package Image */}
                        <div className="md:w-1/3 h-60 relative">
                          <img
                            src={pkg.featureImage || "/placeholder.svg"}
                            alt={pkg.headline}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          
                        </div>
                        

                        {/* Package Details */}
                        <div className="flex-1 p-4 md:p-6">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h3 className="text-md font-semibold text-gray-800 ">{pkg.headline}</h3>
                                <p className="text-sm text-gray-600 mb-4">{pkg.days}</p>
                              </div>
                              
                              <div className="flex items-center text-sm text-[#ce3c3d] font-medium my-1 border-t border-gray-300 pt-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{pkg.location}</span>
                              </div>
                              <div className="pl-1 py-2 border-b border-t border-gray-300">
                                {Array.from({ length: Number(pkg.rating) }).map((_, index) => (
                                  <Star key={index} className="inline w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                              <p className="text-gray-600 text-sm mb-4 pl-1">{pkg.cityRoute}</p>

                              {/* Amenities */}
                              <div className="space-y-2">
                                <div className="flex flex-wrap gap-4">
                                
                                  <div onClick={() => setActiveTabs(prev => ({ ...prev, [pkg._id]: 'highlights' }))} >
                                    <div className="flex justify-center items-center border-1 border-[#ce3c3d] rounded-full h-12 w-12">
                                      <Sun className="w-6 h-6 text-[#ce3c3d]" />
                                    </div>
                                    <div className="text-center">
                                      <span className="text-[12px]">highlights</span>
                                    </div>
                                  </div>
                                  <div onClick={() => setActiveTabs(prev => ({ ...prev, [pkg._id]: 'meals' }))}>
                                    <div className="flex justify-center items-center border-1 border-[#ce3c3d] rounded-full h-12 w-12">
                                      <Coffee className="w-6 h-6 text-[#ce3c3d]" />
                                    </div>
                                    <div className="text-center">
                                      <span className="text-[12px]">Meals</span>
                                    </div>
                                  </div>
                                  <div onClick={() => setActiveTabs(prev => ({ ...prev, [pkg._id]: 'transfers' }))}>
                                    <div className="flex justify-center items-center border-1 border-[#ce3c3d] rounded-full h-12 w-12">
                                      <Car className="w-6 h-6 text-[#ce3c3d]" />
                                    </div>
                                    <div className="text-center">
                                      <span className="text-[12px]">Transfer</span>
                                    </div>
                                  </div>
                                  <div onClick={() => setActiveTabs(prev => ({ ...prev, [pkg._id]: 'hotels' }))}>
                                    <div className="flex justify-center items-center border-1 border-[#ce3c3d] rounded-full h-12 w-12">
                                      <Home className="w-6 h-6 text-[#ce3c3d]" />
                                    </div>
                                    <div className="text-center">
                                      <span className="text-[12px]">Hotel</span>
                                    </div>
                                  </div>
                                  <div onClick={() => setActiveTabs(prev => ({ ...prev, [pkg._id]: 'sightseeing' }))}>
                                    <div className="flex justify-center items-center border-1 border-[#ce3c3d] rounded-full h-12 w-12">
                                      <Eye className="w-6 h-6 text-[#ce3c3d]" />
                                    </div>
                                    <div className="text-center">
                                      <span className="text-[12px]">Sightseeing</span>
                                    </div>
                                  </div>
                                </div>

                             
                              </div>
                            </div>

                            {/* Price and Buttons */}
                            <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-end">
                              <div className="text-right mb-4">
                                <span className="text-2xl font-bold text-gray-800">₹{pkg.bestPrice}</span>
                                <p className="text-xs text-gray-500">Per person</p>
                              </div>
                              <div className="space-y-2 w-full md:w-32">
                                <button className="w-full bg-white border border-[#ce3c3d] text-[#ce3c3d] hover:bg-orange-50 font-medium py-2 px-4 rounded transition-colors">
                                  <Link to={`/packegesdetails/${pkg.slug}`}>Select</Link>
                                </button>
                                <button
                                  className="w-full bg-[#ce3c3d] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors"
                                  onClick={() => openPopup(pkg.headline)}
                                >
                                  Enquire Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                           {activeTabs[pkg._id] === "highlights" && (
                                   <>
                                    <div className="flex gap-2 items-center">
                                    <div className="">
                                      <Sun className="w-4 h-4 text-[#ce3c3d]" />
                                    </div>
                                    <div className="">
                                      <span className="text-[12px]">highlights</span>
                                    </div>
                                  </div>
                                  <div dangerouslySetInnerHTML={{ __html: pkg.highlights }} />
                                   </>
                                )}
                                {activeTabs[pkg._id] === "meals" && (
                                <>
                                    <div className="flex gap-2 items-center">
                                    <div className="">
                                      <Coffee className="w-4 h-4 text-[#ce3c3d]" />
                                    </div>
                                    <div className="">
                                      <span className="text-[12px]">Meals</span>
                                    </div>
                                  </div>
                                  <div dangerouslySetInnerHTML={{ __html: pkg.meals }} />
                                </>
                                )}
                                {activeTabs[pkg._id] === "transfers" && (
                                 <>
                                    <div className="flex gap-2 items-center">
                                    <div className="">
                                      <Car className="w-4 h-4 text-[#ce3c3d]" />
                                    </div>
                                    <div className="">
                                      <span className="text-[12px]">Transfer</span>
                                    </div>
                                  </div>
                                  <div dangerouslySetInnerHTML={{ __html: pkg.transfer }} />
                                 </>
                                )}
                                {activeTabs[pkg._id] === "hotels" && (
                                   <>
                                    <div className="flex gap-2 items-center">
                                    <div className="">
                                      <Home className="w-4 h-4 text-[#ce3c3d]" />
                                    </div>
                                    <div className="">
                                      <span className="text-[12px]">Hotel</span>
                                    </div>
                                  </div>
                                  <div dangerouslySetInnerHTML={{ __html: pkg.hotel }} />
                                   </>
                                )}
                                {activeTabs[pkg._id] === "sightseeing" && (
                                   <>
                                    <div className="flex gap-2 items-center">
                                    <div className="">
                                      <Eye className="w-4 h-4 text-[#ce3c3d]" />
                                    </div>
                                    <div className="">
                                      <span className="text-[12px]">Sightseeing</span>
                                    </div>
                                  </div>
                                  <div dangerouslySetInnerHTML={{ __html: pkg.sightseeing }} />
                                   </>
                                )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No packages found</h3>
                    <p className="text-gray-600">Try adjusting your filters to see more results</p>
                  </div>
                )}
              </div>

              {/* FAQ Section */}
              <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-6 text-[#ce3c3d]">FAQs (Frequently Ask Questions)</h3>
                <div className="space-y-4" dangerouslySetInnerHTML={{ __html: selectedCategories.subcategoryFAQ }}>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Popup */}
          {isPopupOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center p-2 z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-auto relative animate-in fade-in duration-200">
                <button
                  onClick={closePopup}
                  className="absolute -top-2 -right-2 bg-[#ce3c3d] hover:bg-orange-600 text-white rounded-full p-2 transition-colors z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="p-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">{popupHeadline}</h2>

                  <form className="space-y-4" onSubmit={HandleSubmitEnquiry}>
                    <input type="hidden" name="packageName" value={popupHeadline} />
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter Mobile no."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="date"
                          name="date"
                          placeholder="Travel Date"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                        
                          required
                        />
                      </div>
                      <div>
                        <select
                          name="members"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent bg-white"
                        >
                          <option value="1 Travellers">1 Travellers</option>
                          <option value="2 Travellers">2 Travellers</option>
                          <option value="3 Travellers">3 Travellers</option>
                          <option value="4 Travellers">4 Travellers</option>
                          <option value="5+ Travellers">5+ Travellers</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Message..."
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#ce3c3d] hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}