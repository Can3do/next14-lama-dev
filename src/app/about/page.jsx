import Image from 'next/image'

export const metadata = {
	title: 'Next App About',
	description: 'Next.js starter app about',
};

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
            <div className="flex lg:flex-row flex-col">
                <div className=" flex flex-1 flex-col">
                    <p className='text-btnColor font-bold text-2xl'>About agency</p>
                    <h1 className="text-5xl font-bold mt-4 mb-8">We create digital ideas that are bigger, bolder, braver and better.</h1>
                    <p className="text-xl mb-12">Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can not tell you how many times clients have asked me why their website is in another language!</p>
                    <div className="flex gap-12 flex-wrap lg:mb-0">
                        <div className='flex flex-col gap-2'>
                            <p className='text-btnColor font-bold text-5xl'>10+</p>
                            <p>Years of experience</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-btnColor font-bold text-5xl'>324K+</p>
                            <p>Years of experience</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-btnColor font-bold text-5xl'>5+</p>
                            <p>Services and plugins</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[36rem] w-[100%] pt-12">
                    <Image src={'/about.png'} alt="About image" layout='responsive' width={500} height={500}/>
                </div>
            </div>
        </div>
    )
}

export default AboutPage