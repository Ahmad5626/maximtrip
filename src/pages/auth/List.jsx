"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const listings = [
  {
    id: 1,
    title: "Saddle & Sip Saloon",
    category: "salon1",
    categoryColor: "bg-orange-500",
    owner: {
      name: "superbusiness47",
      avatar: "https://php82.kreativdev.com/bulistio/demo/assets/admin/img/vendor-photo/6631db1720b0b.png",
    },
    image: "https://php82.kreativdev.com/bulistio/demo/assets/img/listing/1714619499.png",
    rating: 4.5,
    reviewCount: 2,
    location: "Melbourne, Victoria, Australia",
    priceRange: "$40 - $999",
    isFavorited: false,
  },
  {
    id: 1,
    title: "Saddle & Sip Saloon",
    category: "salon1",
    categoryColor: "bg-orange-500",
    owner: {
      name: "superbusiness47",
      avatar: "https://php82.kreativdev.com/bulistio/demo/assets/admin/img/vendor-photo/6631db1720b0b.png",
    },
    image: "https://php82.kreativdev.com/bulistio/demo/assets/img/listing/1714619499.png",
    rating: 4.5,
    reviewCount: 2,
    location: "Melbourne, Victoria, Australia",
    priceRange: "$40 - $999",
    isFavorited: false,
  },
  {
    id: 1,
    title: "Saddle & Sip Saloon",
    category: "salon1",
    categoryColor: "bg-orange-500",
    owner: {
      name: "superbusiness47",
      avatar: "https://php82.kreativdev.com/bulistio/demo/assets/admin/img/vendor-photo/6631db1720b0b.png",
    },
    image: "https://php82.kreativdev.com/bulistio/demo/assets/img/listing/1714619499.png",
    rating: 4.5,
    reviewCount: 2,
    location: "Melbourne, Victoria, Australia",
    priceRange: "$40 - $999",
    isFavorited: false,
  },
  {
    id: 1,
    title: "Saddle & Sip Saloon",
    category: "salon1",
    categoryColor: "bg-orange-500",
    owner: {
      name: "superbusiness47",
      avatar: "https://php82.kreativdev.com/bulistio/demo/assets/admin/img/vendor-photo/6631db1720b0b.png",
    },
    image: "https://php82.kreativdev.com/bulistio/demo/assets/img/listing/1714619499.png",
    rating: 4.5,
    reviewCount: 2,
    location: "Melbourne, Victoria, Australia",
    priceRange: "$40 - $999",
    isFavorited: false,
  },
];

const StarRating = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">
        ({rating > 0 ? rating.toFixed(1) : "0"}) {reviewCount} Reviews
      </span>
    </div>
  );
};

const ListingCard = ({ listing, index }) => {
  const [isFavorited, setIsFavorited] = useState(listing.isFavorited);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Owner Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img
              src={listing.owner.avatar || "/placeholder.svg"}
              alt={listing.owner.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">By {listing.owner.name}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${listing.categoryColor}`}>
            {listing.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
          {listing.title}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          <StarRating rating={listing.rating} reviewCount={listing.reviewCount} />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <MapPin className="w-4 h-4 text-orange-500" />
          <span className="text-sm">{listing.location}</span>
        </div>

        {/* Price */}
        <div className="text-lg font-semibold text-gray-900">
          <span className="text-gray-600 font-normal">From </span>
          {listing.priceRange}
        </div>
      </div>
    </motion.div>
  );
};

export default function Component() {
  return (
    <section className="py-16 bg-gray-50 md:px-20 px-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
            Featured Listings
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 h-1 bg-orange-500 rounded-full"
            />
          </h2>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing, index) => (
            <ListingCard key={listing.id} listing={listing} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Listings
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
