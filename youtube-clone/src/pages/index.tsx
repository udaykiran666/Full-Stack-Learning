import Image from "next/image";
import localFont from "next/font/local";
import {VideoCard} from "../components/VideoCard"
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/AppBar";

export default function Home() {
  return (
    <div>
      {/* <VideoCard  title={"Hacker or What!! | Jonathan Gaming!"} 
                  author={"uday kiran"} 
                  views={"136k views"}
                  timestamp={"2 days ago"} 
                  img={"photo.png"}/> */}
      <Appbar/>
      <VideoGrid/>
    </div>
  );
}
