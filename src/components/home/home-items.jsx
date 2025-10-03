import { homeIcons } from "./consts"
import HomeItem from "./home-item"

const HomeItems = ({ className }) => {
    return (
        <div className={`flex  justify-center gap-24 text-white ${className}`}>
            {homeIcons.map(item => <HomeItem key={item.id} item={item} />)}
        </div>
    )
}

export default HomeItems