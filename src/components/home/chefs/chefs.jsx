import Title from "../../ui/title.jsx"
import chefs from "./consts.js"

const Chefs = () => {
    return (
        <section>
            <div className="container">
                <Title bgTitle={`CHEFS`} text={`This Month's Chefs`}/>
                <div>
                    {chefs.map((chef) => {
                        <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <h3>

                                    </h3>
                                    <p>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Chefs