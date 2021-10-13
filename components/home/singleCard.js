export const SingleCard = (props) => {
    return (
        <div className="h-64 md:h-64 lg:h-64 col-span-1 flex flex-col text-left bg-cover bg-center m-1 rounded-box" style={
            {
                backgroundImage: `url(${props.image})`
            }
        }>
            <div className="flex-grow"></div>
            <div className="bg-gradient-to-b from-transparent to-black rounded-box">
                <div className="p-5 z-10 max-h-20 overflow-hidden overflow-ellipsis mb-2">
                    <a href={props.path} className="text-center text-lg md:text-lg lg:text-md tracking-tight leading-7 font-medium font-regular hover:text-primary transition-colors text-white">{props.title}
                    </a>
                </div>
            </div>
        </div>

    )
}

export const EndCard = (props) => {
    return (
        <div className="h-64 md:h-64 lg:h-64 col-span-1 flex flex-col text-left bg-cover bg-center m-1 rounded-box" style={
            {
                backgroundImage: `url(${props.image})`
            }
        }>
            <a href="#" className="flex justify-center bg-black bg-opacity-80 h-full rounded-box text-white hover:text-primary transition-colors">
                <div className="text-center self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </a>
        </div>
    )
}

export const SlideCard = (props) => {
    return (
        <div className="h-96 md:h-64 lg:h-72 col-span-1 flex flex-col text-left bg-cover bg-center m-1 rounded-box" style={
            {
                backgroundImage: `url(${props.image})`
            }
        }>
            <div className="flex-grow"></div>
            <div className="bg-gradient-to-b from-transparent to-black rounded-box">
                <div className="p-5 z-10 max-h-20 overflow-hidden overflow-ellipsis mb-2">
                    <a href={props.path} className="text-center text-lg md:text-lg lg:text-md tracking-tight leading-7 font-medium font-regular hover:text-primary transition-colors text-white">{props.title}
                    </a>
                </div>
            </div>
        </div>
    )
}
    
