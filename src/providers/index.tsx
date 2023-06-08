'use client';

import { ThemeProvider } from 'next-themes';

import RootStyleRegistry from '@/providers/RootStyleRegistry';

interface Props {
	children: React.ReactNode;
}
export default function Providers({ children }: Props) {
	return (
		<ThemeProvider defaultTheme='system' enableSystem={false}>
			<RootStyleRegistry>{children}</RootStyleRegistry>
		</ThemeProvider>
	);
}

export function Print() {
	console.log('hello world');
}
