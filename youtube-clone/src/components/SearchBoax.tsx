export const SearchBox = () =>{
    return(
        <div> 
            <div className="flex w-96 rounded-3xl border border-gray-500 p-1 pl-3 pr-3 bg-slate-950">
                <input className="w-full bg-slate-950 border-none outline-none items-center" type="text" placeholder="Search"/>
                <button className="bg-slate-950 text-gray-400 py-2 px-4 items-center rounded inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}