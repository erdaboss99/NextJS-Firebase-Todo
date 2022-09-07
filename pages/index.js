import Head from 'next/head';
import Login from '../components/Login';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.JS TODO App</title>
			</Head>
			<Login />
		</>
	);
}
