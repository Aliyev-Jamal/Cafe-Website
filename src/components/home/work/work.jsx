import Title from "../../ui/title"
import { items } from "./consts"

const Work = () => {
    return (
        <section className={`select-none pt-15`}>
            <div className="container">
                <Title bgTitle={`WORK`} text={`How It Works`} className={`mb-10`} />
                <div className="flex justify-between gap-[18px] flex-wrap">
                    {items.map(item => (
                        <div className={`bg-mute-gray max-w-[255px] duration-300 hover:bg-custom-green group/my-item rounded-md p-6`} style={{ boxShadow: '0px 2px 5px 0px ' }} key={item.id}>
                            <h3 className="before:bg-custom-green pb-2.5 text-white capitalize relative before:absolute before:bottom-0 before:h-0.5 group-hover/my-item:text-mute-gray group-hover/my-item:before:bg-mute-gray before:w-[56px] bottom-[-10px] before:left-0">{item.title}</h3>
                            <p className={`text-[13px] mt-5 text-white/50 group-hover/my-item:text-mute-gray`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work