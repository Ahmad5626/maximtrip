  <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Results Count */}
              <div className="p-4 border-b border-gray-100">
                <p className="font-medium text-gray-800">12 Results Found.</p>
              </div>

              {/* Price Range */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Rs.{priceRange[0]}</span>
                  <span className="text-gray-600 text-sm">Rs.{priceRange[1]}</span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-full bg-[#ce3c3d] rounded-full"
                    style={{ width: "%", left: "0%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Approx price per person</p>
              </div>

              {/* Duration */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-800 mb-3">Duration</h3>
                <div className="space-y-2">
                  {durations.map((duration, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`duration-${index}`}
                        className="w-4 h-4 text-[#ce3c3d] border-gray-300 rounded focus:ring-[#ce3c3d]"
                      />
                      <label htmlFor={`duration-${index}`} className="ml-2 text-sm text-gray-600">
                        {duration.label} ({duration.count})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotel Star Rating */}
              {/* <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-800 mb-3">Hotel Star Rating</h3>
                <div className="space-y-2">
                  {starRatings.map((rating) => (
                    <div key={rating.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`star-${rating.value}`}
                        className="w-4 h-4 text-[#ce3c3d] border-gray-300 rounded focus:ring-[#ce3c3d]"
                      />
                      <label htmlFor={`star-${rating.value}`} className="ml-2 text-sm text-gray-600 flex items-center">
                        {rating.label}{" "}
                        <span className="ml-1 flex">
                          {Array(rating.value)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            ))}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Route City */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-800 mb-3">Route City</h3>
                <div className="space-y-2">
                  {routes.map((route, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`route-${index}`}
                        className="w-4 h-4 text-[#ce3c3d] border-gray-300 rounded focus:ring-[#ce3c3d]"
                      />
                      <label htmlFor={`route-${index}`} className="ml-2 text-sm text-gray-600">
                        {route.label}({route.count})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Location</h3>
                <div className="space-y-2">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`location-${index}`}
                        className="w-4 h-4 text-[#ce3c3d] border-gray-300 rounded focus:ring-[#ce3c3d]"
                      />
                      <label htmlFor={`location-${index}`} className="ml-2 text-sm text-gray-600">
                        {location.label}({location.count})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>