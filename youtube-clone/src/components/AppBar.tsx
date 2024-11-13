import { SearchBox } from "./SearchBoax";

export function Appbar(){
    return(
        <div className="flex justify-between p-4">
            <div>
                Youtube
            </div>
            <div>
                <SearchBox/>
            </div>
            <div>
                Signin
            </div>
        </div>
    )
}