import Link from "next/link";

const styles = {
	container: "w-screen h-screen bg-black text-white flex justify-center items-center",
	title: "text-6xl",
	subtitle: "text-2xl text-white/60",
	content_wrapper: "w-full max-w-[600px] mb-4",
	button: "bg-blue-600 py-2 px-4 text-white rounded-lg text-xl",
};

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.content_wrapper}>
				<h1 className={styles.title}>The Best Journal App, Period</h1>
				<p className={styles.subtitle}>
					This is the best app for tracking your mood through out your life.
					All you have to do is be honest.
				</p>
			</div>
			<div>
				<Link href="/journal">
					<button className={styles.button}>Get Started</button>
				</Link>
			</div>
		</div>
	);
};
