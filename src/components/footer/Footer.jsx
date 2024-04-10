import Link from 'next/link'

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
            <div className='flex justify-between text-textColorSoft'>
                <div className="font-bold">Can3do</div>
                <div className='text-textColorSoft'>Based on <Link className='underline ' href='https://www.youtube.com/watch?v=vCOSTG10Y4o&t=2020s&ab_channel=LamaDev'>Lama Dev Video</Link></div>
            </div>
        </div>
        
    )
}

export default Footer