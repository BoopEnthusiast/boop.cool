import './games.css'
import Link from "next/link";


export const metadata = {
    title: 'About',
}


export default function About() {
    return (
        <>
            <h1>Games</h1>
            <p>
                Back to <Link href="/">Home</Link>
            </p>
        </>
    );
}
