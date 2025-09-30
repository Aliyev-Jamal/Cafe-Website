import About from "./about/about"
import Chefs from "./chefs/chefs"
import Dishes from "./dishes/dishes"
import HomeItems from "./home-items"
import HomeTitle from "./home-title"
import Recipes from "./recipes/recipes"
import Social from "./socials/social"
import Work from "./work/work"

const Home = () => {
    return (
        <>
            <section className={`bg-[url("/hero-bg.png")] pt-[120px] bg-no-repeat bg-cover bg-top min-h-svh`}>
                <div className="container min-h-svh flex flex-col items-center justify-center">
                    <HomeTitle />
                    <button className={`rounded-[43px] mb-17.5 bg-custom-green font-bold py-6 px-14 hover:scale-[1.05] duration-300`}>Order Now</button>
                    <HomeItems />
                    <About />
                </div>
            </section>
            <Work />
            <Dishes />
            <Chefs/>
            <Recipes/>
            <Social/>
        </>
    )
}

export default Home