import Title from "../../ui/title"
import RecipesItem from "./recipes-item"
import RecipesMainBar from "./recipes-main-bar"

const Recipes = () => {
    return (
        <section>
            <div className="container">
                <Title bgTitle={`RECIPES`} text={`Recipes From Our Chefs`} />
                <div className={`flex gap-7 mt-15 w-full`}>
                    <RecipesMainBar />
                    <div className={`gap-7.5 flex flex-col`}>
                        <RecipesItem btnText={'LUNCH'} />
                        <RecipesItem btnText={'DINNER'} />
                        <RecipesItem btnText={'SWEETS'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recipes