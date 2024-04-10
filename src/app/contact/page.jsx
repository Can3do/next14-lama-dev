import Image from "next/image"

const ContactPage = () => {
    return(
        <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-32">
                <div className="w-[100%]">
                    <form action="" className="flex flex-col gap-4">
                        <input className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800" type="text" placeholder=" Full name"/>
                        <input className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800" type="text" placeholder="Email"/>
                        <input className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800" type="text" placeholder="Phone number (optional)"/>
                        <textarea className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 py-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800" name="message" rows="40" placeholder="Your message"></textarea>
                        <button className="max-w-[32rem] bg-btnColor rounded-md p-3 font-bold">Send</button>
                    </form>

                </div>
                <div className="max-w-[36rem] w-[100%] pt-12">
                    <Image src='/contact.png' width={500} height={500} layout="responsive" alt="Contact image" priority/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage