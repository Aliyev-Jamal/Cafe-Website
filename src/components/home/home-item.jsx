const HomeItem = ({ item }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2.5 ">
            <img className="size-4 " src={item.img} alt="#" />
            <p>{item.title}</p>
            <p className="hover:underline cursor-pointer text-foreground">{item.subtitle}</p>
        </div>
    )
}

export default HomeItem