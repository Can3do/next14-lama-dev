import { Suspense } from "react"
import Image from "next/image"
import { getUser } from "@/lib/data"

const PostUser = async ({userId}) => {
    const user = await getUser(userId)
    return (
        <>
            <Image src={user.img ? user.img : '/noavatar.png'} alt="Avatar Image" width={60} height={60} className="rounded-full"/>
                <div className="flex flex-col">
                    <span className="font-bold">Author</span>
                    <Suspense fallback={<span>Loading...</span>}>
                        <span>{user.username}</span>
                    </Suspense>
                </div>
        </>
    )
}

export default PostUser