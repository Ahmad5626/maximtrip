

import { use, useContext, useEffect, useState } from "react"
import { Star, MapPin, ChevronRight, Sun, Coffee, Car, Building, Eye ,X,Send } from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/footer/Footer"
import { AuthContext } from "@/context"
import { Link, useParams } from "react-router-dom"
import ScrolltoTop from "@/components/ScrolltoTop"


export default function PackegesLishting() {

  const {packegesData,categoryData,HandleSubmitEnquiry,isPopupOpen,setIsPopupOpen,setPopupHeadline,popupHeadline}=useContext(AuthContext)
  const [priceRange, setPriceRange] = useState([7800, 25799])
  const [selectedDurations, setSelectedDurations] = useState([])
  const [selectedStars, setSelectedStars] = useState([])
  const [selectedRoutes, setSelectedRoutes] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
const {id} =useParams()
  const packages = [
    {
      id: 1,
      title: "Srinagar Kashmir Group Tour Package",
      duration: "4 Nights/5 Days",
      stars: 3,
      location: "Jammu & Kashmir",
      route: "Jammu to Jammu",
      price: 12199,
      image: "https://www.maximtrip.in/self/assets/img/holiday/thumbs/kerala-tour-packages13.png",
      featured: true,
    },
    {
      id: 2,
      title: "Group Tour to Kashmir",
      duration: "2 Nights/3 Days",
      stars: 2,
      location: "Jammu & Kashmir",
      route: "Jammu to Jammu",
      price: 8399,
      image: "https://www.maximtrip.in/self/assets/img/holiday/thumbs/kerala-tour-packages13.png",
      featured: true,
    },
    {
      id: 3,
      title: "Kashmir Group Package",
      duration: "3 Nights/4 Days",
      stars: 3,
      location: "Jammu & Kashmir",
      route: "Jammu to Jammu",
      price: 10999,
      image: "https://www.maximtrip.in/self/assets/img/holiday/thumbs/kerala-tour-packages13.png",
      featured: true,
    },
    {
      id: 4,
      title: "Kashmir Group Tour Packages From Delhi",
      duration: "6 Nights/7 Days",
      stars: 4,
      location: "Jammu & Kashmir",
      route: "Jammu to Jammu",
      price: 25799,
      image: "https://www.maximtrip.in/self/assets/img/holiday/thumbs/kerala-tour-packages13.png",
      featured: true,
    },
  ]

  const durations = [
    { label: "More 4 Nights 5 Days", count: 1 },
    { label: "More 2 Nights 3 Days", count: 1 },
    { label: "More 3 Nights 4 Days", count: 1 },
    { label: "More 6 Nights 7 Days", count: 4 },
    { label: "More 7 Nights 8 Days", count: 3 },
    { label: "More 5 Nights 6 Days", count: 2 },
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
    { label: "Jammu & Kashmir", count: 6 },
    { label: "Kashmir", count: 4 },
  ]

  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  useEffect(() => {
    categoryData.forEach((category) => {
      if (category._id === id) {
        setSelectedCategories(category)
      }
    })
  })

 const openPopup = (headline) => {
  setIsPopupOpen(true)
  setPopupHeadline(headline)
 }
  const closePopup = () => {
    setIsPopupOpen(false)
    setPopupHeadline("")
  }
  // console.log();
console.log(packegesData);

  return (
  <>
  <ScrolltoTop/>
  <Navbar/>
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
          <div className="flex flex-col md:flex-row ">
              <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {selectedCategories.headline}
                      {/* <span className="ml-2 text-sm font-normal text-[#ce3c3d]">12 Packages</span> */}
                    </h1>
              
                  </div>
                  <p className="text-gray-600 mb-2">
                   {selectedCategories.story}
                  </p>
                  {/* <button className="text-[#ce3c3d] hover:text-orange-600 font-medium text-sm flex items-center">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </button> */}
              </div>
                <div className="md:w-1/3 ">
                  <div className="w-full">
                      <img
                        src={selectedCategories.image}
                        alt="Kashmir Group Tour Packages"
                        className=" object-contain"
                      />
                  </div>
                </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters */}
        

          {/* Package Listings */}
          <div className="flex-1">
            <div className="space-y-6">
              {packegesData.filter((pkg) => pkg.category === selectedCategories.categoryName).map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Package Image */}
                    <div className="md:w-1/3 h-60  relative">
                      <img
                        src={pkg.heroImage || "/placeholder.svg"}
                        alt={pkg.headline}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      {pkg.featured && (
                        <div className="absolute top-4 left-0 bg-red-500 text-white text-xs px-3 py-1 font-medium">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Package Details */}
                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-800 mb-2">{pkg.headline}</h2>
                          {/* <div className="flex items-center mb-3">
                            <div className="flex">{renderStars(pkg.stars)}</div>
                          </div> */}
                          <div className="flex items-center text-sm text-[#ce3c3d] font-medium mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{pkg.address}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{pkg.route}</p>

                          {/* Amenities */}
                          <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <Sun className="w-5 h-5 text-[#ce3c3d]" />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">Highlight</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <Coffee className="w-5 h-5 text-[#ce3c3d]" />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">Meals</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <Car className="w-5 h-5 text-[#ce3c3d]" />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">Transfer</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <Building className="w-5 h-5 text-[#ce3c3d]" />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">Hotel</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <Eye className="w-5 h-5 text-[#ce3c3d]" />
                              </div>
                              <span className="text-xs text-gray-500 mt-1">Sightseeing</span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Buttons */}
                        <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-end">
                          <div className="text-right mb-4">
                            <span className="text-2xl font-bold text-gray-800">₹{pkg.price}</span>
                            <p className="text-xs text-gray-500">Per person</p>
                          </div>
                          <div className="space-y-2 w-full md:w-32">
                            <button
                              className="w-full bg-white border border-[#ce3c3d] text-[#ce3c3d] hover:bg-orange-50 font-medium py-2 px-4 rounded transition-colors"
                              style={{ borderColor: "#ce3c3d", color: "#ce3c3d" }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#fff5f5"
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#ffffff"
                              }}
                            >
                              <Link to={`/packegesdetails/${pkg._id}`}>Select </Link>
                            </button>
                            <button
                              className="w-full bg-[#ce3c3d] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors"
                              style={{ backgroundColor: "#ce3c3d" }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#b83334"
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#ce3c3d"
                              }}
                              onClick={() => openPopup(pkg.headline)}
                            >
                            
                              Enquire Now
                              
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


           {isPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]  flex items-center justify-center p-2 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-auto relative animate-in fade-in duration-200">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute -top-2 -right-2 bg-[#ce3c3d] hover:bg-orange-600 text-white rounded-full p-2 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Popup content */}
            <div className="p-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">{popupHeadline}</h2>

              <form  className="space-y-4" onSubmit={HandleSubmitEnquiry}>
              <input type="hidden" name="packageName" value={popupHeadline} />
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                   
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile no."
                    
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    required
                  />
                </div>

                {/* Travel Date and Travellers Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      name="date"
                      placeholder="Travel Date"
                      
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select
                      name="members"
                      
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

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                   
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
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
    </div>
    <Footer/>
  </>
  )
}
