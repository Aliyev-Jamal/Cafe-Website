import { homeIcons } from "./consts"
import HomeItem from "./home-item"


const HomeItems = () => {
    return (
        <div className={`flex mb-22.5 justify-center gap-24 text-white`}>
            {homeIcons.map(item =><HomeItem key={item.id} item={item} />)}
        </div>
    )
}

export default HomeItems