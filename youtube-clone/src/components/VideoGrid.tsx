import { VideoCard } from "./VideoCard"

const Videos = [{
    title:"Hacker or What!! | Jonathan Gaming!",
    author:"uday kiran", 
    views:"136k views",
    timestamp:"2 days ago", 
    img:"photo.png"
},{
    title:"Hacker or What!! | Jonathan Gaming!",
    author:"uday kiran", 
    views:"136k views",
    timestamp:"2 days ago", 
    img:"photo.png"
},{
    title:"Hacker or What!! | Jonathan Gaming!",
    author:"uday kiran", 
    views:"136k views",
    timestamp:"2 days ago", 
    img:"photo.png"
},{
    title:"Hacker or What!! | Jonathan Gaming!",
    author:"uday kiran", 
    views:"136k views",
    timestamp:"2 days ago", 
    img:"photo.png"
},{
    title:"Hacker or What!! | Jonathan Gaming!",
    author:"uday kiran", 
    views:"136k views",
    timestamp:"2 days ago", 
    img:"photo.png"
},{
    title:"Hacker or What!! | Jonathan Gaming!",
    author:"uday kiran", 
    views:"136k views",
    timestamp:"2 days ago", 
    img:"photo.png"
}]

export const VideoGrid = () =>{
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Videos.map((video)=>(
                <VideoCard title={video.title} 
                author={video.author} 
                views={video.views}
                timestamp={video.timestamp} 
                img={video.img}/>
            ))}
        </div>
    )
}