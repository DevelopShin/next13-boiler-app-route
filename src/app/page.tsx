import { ThemeToggle } from '@/ui';

export default function Home() {
	return (
		<main className='flex min-h-full flex-col items-center justify-between p-24'>
			<div>
				<ThemeToggle />
				<h1 className='m-3 border-2 border-yellow-700 p-1 text-center text-green-700'>
					Main
				</h1>
			</div>
		</main>
	);
}
