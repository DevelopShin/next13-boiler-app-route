import Link from 'next/link';
import { styled } from 'styled-components';

function index() {
	return (
		<div className='flex flex-col p-5'>
			<div className='text-center'>
				<Link href={'/'}>HOME</Link>
			</div>
			<br />

			<Button>styled-components</Button>
			<button className='bg-blue-600 text-fuchsia-50'>
				ssr-tailwindcss
			</button>
		</div>
	);
}

export default index;

const Button = styled.button`
	background:red;
	color:white;
`;
