export function VideoCard(props: any){
    return (
        <div className="p-3">
            <img className="rounded-xl pt-5" src={props.img}></img>
           <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-14" src={props.img}></img>
            </div>
            <div className="col-span-11 ml-4">
                {props.title}
                <div className="col-span-11  text-base text-gray-400">
                {props.author}
                </div>
                <div className="col-span-11  text-base text-gray-400">
                    {props.views} . {props.timestamp}
                </div>
            </div>

           </div>
        </div>
    )
}