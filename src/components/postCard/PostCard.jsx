import Image from "next/image"
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <article className="overflow-hidden rounded-lg bg-slate-900 flex-1 basis-[20rem]">
            <div className="h-56 w-full relative">
                {post.img && <Image alt={post.slug} src={post.img} fill className="object-cover"/>}
            </div>


            <div className="p-4 sm:p-6 flex flex-col h-[calc(100%-14rem)] justify-between">
                <div className="flex flex-col">
                    <p className="text-lg font-medium text-white">{post.title}</p>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">{post.body}</p>
                </div>

                <Link href={`/blog/${post.slug}`} className="group mt-4 text-sm font-medium text-blue-600">Ver más</Link>
            </div>
        </article>
    )
}

export default PostCard