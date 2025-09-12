import AboutSlider from "../../ui/about-slider"
import Title from "../../ui/title"

const About = () => {
    return (
        <div className={`bg-bg-gray pb-90px w-full rounded-md pt-15`}>

            <Title bgTitle={`ABOUT`} text={`The Basics Of Healthy Food`} className={`mb-4`} />
            <p className={`mb-90px mx-auto max-w-[734px] text-white`}>
                In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
            </p>
            <AboutSlider />

        </div>
    )
}

export default About