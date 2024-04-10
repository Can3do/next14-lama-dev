import PostCard from "@/components/postCard/PostCard"
// import {getPosts} from '@/lib/data'

const getPosts = async () => {
    const res = await fetch('http://localhost:3000/api/blog')
    if(!res.ok) throw new Error('Something went wrong')
    const posts = await res.json()
    return posts
}


const BlogPage = async () => {

    const posts = await getPosts()
    return (
        <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
            <div className="flex gap-8 flex-wrap">
                {
                    posts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))
                }
            </div>
        </div>
        
    )
}

export default BlogPage