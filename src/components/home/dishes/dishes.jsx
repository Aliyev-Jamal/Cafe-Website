import Title from "../../ui/title"
import DishesCard from "./dishes-card"

const Dishes = () => {
    return (
        <section>
            <div className="container">
                <Title bgTitle={`DISHES`} text={`Dish Of The Day`} className={`mt-5 mb-10`} />
                <div className={`flex flex-wrap gap-7.5`}>
                    {[0, 1, 2, 3, 4, 5].map((num, i) => (
                        <DishesCard num={num} index={i} key={i}/>
                    ))}
                </div>
                {/* <div className={` max-w-[1110px] flex flex-wrap`}>
                    <DishesCard />
                </div> */}
            </div>
        </section>
    )
}
export default Dishes