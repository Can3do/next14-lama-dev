import Image from "next/image";
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
      <div className="flex flex-col lg:flex-row">
          <div className=" flex flex-1 flex-col gap-8">
            <h1 className="text-7xl font-bold">Creative Thoughts Agency.</h1>
            <p className="text-xl">Sometimes it is nice to put in text just to get an idea of how text will fill in a space on your website.</p>
            <div className="flex gap-6">
              <Link href='/about' className="py-4 px-6 bg-btnColor rounded-lg font-semibold text-md text-white">Learn More</Link>
              <Link href='/contact' className="py-4 px-6 bg-slate-100 text-bgColor rounded-lg font-semibold text-md">Contact</Link>
            </div>
            <div className="w-[100%] max-w-[500px]">
              <Image src={'/brands.png'} alt="brands" layout="responsive" className="grayscale" width={500} height={100}/>
            </div>
          </div>

          <div className="flex-1 max-w-[36rem] w-[100%] pt-12">
            <Image src={'/hero.gif'} alt="hero image" layout="responsive" width={500} height={500}/>
          </div>
        </div>
    </div>
    
  );
};

export default HomePage;