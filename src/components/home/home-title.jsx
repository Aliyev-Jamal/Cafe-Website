const HomeTitle = () => {
    return (
        <div className='text-center'>
            <h1 className="text-white font-thin capitalize text-6xl max-w-2xl tracking-wider">Your <span className="font-medium">favourite food </span>
                delivered <span className="font-medium">hot & fresh</span></h1>
            <p className={`mx-auto max-w-[595px] text-center mt-3 text-foreground mb-10`}>HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating,
                so you can cook a fresh homemade dinner in just 15 minutes.</p>
        </div>
    )
}

export default HomeTitle