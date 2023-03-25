


export default function Comment(){
    return(
        <div className="bg-white my-8 p-8 mx-4 rounded-lg">
        <div className="flex items-center gap-2">
            {/* <Image src={avatar} alt={name} width={32} height={32}
            className="rounded-full"/> */}
            <img src={avatar} alt={"avatar"} width={"32"} height={"32"}
            className="rounded-full"/>
            
            <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
            <p className="break-all">{title}</p>
        </div>
        <p className="text-sm text-gray-500 my-4">
                {timestamp}
                </p>
        </div>       

    )
}