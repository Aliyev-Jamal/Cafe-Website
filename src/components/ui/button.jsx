const Button = ({ className, text }) => {
  return (
    <button className={`bg-[#262626] border border-[#303030] text-white/50 hover:bg-custom-green hover:text-black duration-300 w-[100px] h-[40px] text-sm font-bold uppercase rounded-full ${className}`}>
      {text}
    </button>
  )
}

export default Button