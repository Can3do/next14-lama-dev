import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { auth } from '@/lib/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		default: 'Next.js 14',
		template: '%s | Next.js 14',
	},
	description: 'Next.js starter app',
};

export default async function RootLayout({ children }) {
	const session = await auth();
	console.log(session);
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-slate-950 text-textColor`}>
				<Navbar session={session} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
