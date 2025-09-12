import { MdMenu } from "react-icons/md"

const HeaderBurger = () => {
  return (
    <button className={`hidden max-[520px]:block cursor-pointer hover:scale-125 duration-300`}>
        <MdMenu className={`hover:text-custom-green size-9 text-white`} />
    </button>
  )
}

export default HeaderBurger