interface BlogCardProps{
    authorName: string,
    title: string,
    content: string,
    publishedAt: string
}

interface AvatarProps{
    name:string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedAt
}:BlogCardProps) => {
    return(
        <div className="p-4 border-b border-slate-200 pb-4">
            <div className="flex items-center">
                <div className="">
                    <Avatar name={authorName.slice(0, 2).toUpperCase()}/>
                </div>
                <div className="text-slate-700 font-extralight pl-2">
                    {authorName}
                </div>
                <div className="text-slate-400 pl-1">
                    · {publishedAt}
                </div>
            </div>
            <div className="font-bold text-2xl">
                {title}
            </div>
            <div className="text-md font-thin text-[#6B6B6B]">
                {content.slice(0, 100) + "....."}
            </div>
            <div className="text-slate-500 text-sm font-thin">
                {`${Math.ceil(content.length/100)} minutes read`}
            </div>
        </div>
    )
}

function Avatar({ name }: AvatarProps) {
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300 ">{name}</span>
        </div>
    );
}
