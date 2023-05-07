import React from "react"

const Button = ({ style }) => {
  return (
    <button type="button" className={`${style} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none`}>
      Get Started
    </button>
  )
}

export default Button
