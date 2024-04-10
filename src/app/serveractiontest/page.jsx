import { addPost, deletePost } from "@/lib/action"

const ServerActionTestPage = () => {

    return (
        <div>
            <form action={addPost} className="text-black">
                <input type="text" name='title' placeholder="title" />
                <input type="text" name='desc' placeholder="description" />
                <input type="text" name='userId' placeholder="userId" />
                <input type="text" name='slug' placeholder="slug" />
                <button className="text-white">Create</button>
            </form>

            <form action={deletePost} className="text-black">
                <input type="text" name='id' placeholder="id del post" />
                <button className="text-white bg-red-600">Delete</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage