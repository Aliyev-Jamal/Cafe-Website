import Title from "../../ui/title.jsx"
import { chefs } from "./consts.js"

const Chefs = () => {
    return (
        <section>
            <div className="container">
                <Title bgTitle={`CHEFS`} text={`This Month's Chefs`} />
                <div className={`flex justify-between gap-7.5 mt-6`}>
                    {chefs.map((chef) => (
                        <div className={`max-w-[350px]`} key={chef.id}>
                            <div className={`mb-6 flex items-center gap-6`}>
                                <img className={`size-[65px] rounded-full`} src={chef.avatar} alt="Avatar"/>
                                <div>
                                    <h3 className={`mb-1.5 text-lg font-bold text-white`}>
                                        {chef.name}
                                    </h3>
                                    <p className={`text-xs text-white/50`}>
                                        {chef.prof}
                                    </p>
                                </div>
                            </div>
                            <div className={`flex gap-7.5`}>
                                {chef.images.map((img, index) => (
                                    <img className={`rounded-md`} src={img} alt="Image" key={index} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Chefs