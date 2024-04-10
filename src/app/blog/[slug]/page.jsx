import Image from "next/image"

import PostUser from "@/components/postUser/PostUser"


const getPost = async(slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    if (!res.ok) throw new Error('Something went wrong')
    const post = await res.json()
    return post
}

export const generateMetadata = async ({params}) => {
    const { slug } = params
    const post = await getPost(slug)

    return {
        title: post.title,
        description: post.desc
    }
}

const SinglePostPage = async ({params}) => {
    const { slug } = params
    const post = await getPost(slug)
    return (
        <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                { post.img &&  <div className="relative flex w-[100%] max-w-[20rem] h-[20rem] lg:h-[calc(100vh-200px)]">
                    <Image src={post.img} alt="Post Image" fill className="object-cover rounded-lg"/>
                </div>
                }

                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <div className="flex gap-6 bg-bgColorSoft px-4 rounded-lg py-4">
                        <PostUser className="text-textColorSoft" userId={post.userId}/> 
                        <div className="flex flex-col">
                            <span className="font-bold">Published</span>
                                <span className="text-textColorSoft" >{post.createdAt.toString().slice(4,16)}</span>
                        </div>
                    </div>
                    <div>
                        <p>
                            {post.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default SinglePostPage