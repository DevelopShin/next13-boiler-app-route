import { st } from '@/lib';
import { ThemeToggle } from '@/lib';

export default function Home() {
	return (
		<main className={style}>
			<div>
				<ThemeToggle />
				<h1 className='m-3 border-2 border-yellow-700 p-1 text-center text-green-700'>
					Main
				</h1>
			</div>
		</main>
	);
}

const style = st`flex min-h-full flex-col items-center justify-between p-24`();
// const style = st<{ v: boolean }>`${p =>
// 	p?.v && 'red'}flex min-h-full flex-col items-center justify-between p-24`;
// use ==> style({v:true})
