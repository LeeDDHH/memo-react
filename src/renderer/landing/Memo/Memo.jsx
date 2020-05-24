import React from 'react'
import "../../css/style.css"
import img from '../../../static/FJxFPJAR_400x400.jpg'

const Memo = () => {
  return (
    <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
  <div className="sm:flex sm:items-center px-6 py-4">
    <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src={img} alt=""/>
    <div className="text-center sm:text-left sm:flex-grow">
      <div className="mb-4">
        <p className="text-xl leading-tight">李 東憲 a.k.a.カモ</p>
        <p className="text-sm leading-tight text-grey-dark">Developer at StayHome</p>
      </div>
      <div>
        <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Memo;
