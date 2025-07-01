import Navbar from '@/components/navbar/Navbar'
import ScrolltoTop from '@/components/ScrolltoTop'
import Footer from '@/footer/Footer'
import React from 'react'

const TermsOfUse = () => {
  return (
    <div>
    <ScrolltoTop/>
    <Navbar/>
    

    <div className="flex justify-center p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl text-gray-800">
        <h1 className="text-2xl font-semibold text-center text-orange-500 mb-6">
          Terms Of Use
        </h1>

        <p className="mb-4">
          Please read these Terms and Conditions before using{" "}
          <strong>MAXIMTRIP</strong> website (Website) and making any booking.
          When you make a purchase on the Site, you agree to accept these Terms
          and Conditions.
        </p>

        <h2 className="text-lg font-semibold underline mb-2">Use of Website</h2>

        <ol className="list-decimal pl-5 space-y-3">
          <li>
            This Website is available to all users (hereinafter referred to as
            the “User” or “You”), subject to these General Terms and Conditions
            (hereinafter referred to as “T&Cs”). When you make a purchase on
            the Site or otherwise use this Site, you agree to accept these
            Terms and Conditions.
          </li>
          <li>
            This Platform is operated by{" "}
            <strong>MAXIMTRIP</strong>, duly incorporated in India and contact
            telephone number +91 9898794733; (hereinafter referred to as{" "}
            <strong>“MAXIMTRIP”</strong>, “we”, “us” or “our”).
          </li>
          <li>
            The User hereby declares that he or she is an adult (at least 18
            years of age) and has the legal capacity to be bound by this
            agreement and to use this Website in accordance with these T&Cs.{" "}
            <strong>MAXIMTRIP</strong> expressly warns the User that by using
            the Website to make a booking, he/she is concluding a contract with
            payment obligations. Furthermore, the User declares that all
            information he or she provides to access this Website and while
            using it is true, complete and accurate, and he/she agrees to keep
            it updated.
          </li>
          <li>
            This Website is solely and exclusively for the User's personal use.
            It may not be modified, reproduced, duplicated, copied,
            distributed, sold, resold or exploited for commercial or
            non-commercial purposes, except that you may print out copies of
            your travel itinerary for personal use, or forward your travel
            itinerary to a bona fide itinerary management company.
          </li>
          <li>
            The User agrees not to use this Website for illegal or prohibited
            purposes. In particular, the User accepts that he or she will only
            use this Website for him/herself and that the products or services
            purchased through this Website will be for his or her own use or
            consumption, or the use or consumption of persons on behalf of whom
            he or she is legally authorized to act. The User shall not resell
            to third parties' products or services purchased through this
            Website.
          </li>
          <li>
            <strong>MAXIMTRIP</strong> reserves the right to deny access to the
            Website at any time without notice.
          </li>
        </ol>

        <p className="mt-6 font-semibold">Team <strong>MAXIMTRIP</strong></p>
      </div>
    </div>
    <Footer/>
      
    </div>
  )
}

export default TermsOfUse
