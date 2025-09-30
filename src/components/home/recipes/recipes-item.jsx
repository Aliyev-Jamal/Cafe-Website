import { Eye, MessagesSquare } from "lucide-react"

const RecipesItem = ({btnText}) => { 
    return (
        <div>
            <div className={`w-[540px] h-[150px] bg-bg-gray hover:bg-custom-green duration-300 text-white rounded-[6px] flex justify-center items-center flex-col`}>
                <h3 className={`p-5 ml-2.5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h3>
                <span className={`flex w-[90%] justify-between`}>
                    <button className={`text-white w-[75px] h-[25px] rounded-[6px] bg-background`}>{btnText}</button>
                    <h4 className={`mr-46`}>07 Jan 2016</h4>
                    <div className="gap-6 flex items-center">
                        <div className={`flex gap-3`}><Eye /><h3>275</h3></div>
                        <div className={`flex gap-3`}><MessagesSquare /><h3>12</h3></div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default RecipesItem