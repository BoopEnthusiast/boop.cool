import Link from "next/link";

export const metadata = {
    title: 'About',
}

export default function About() {
    return (
        <>
            <h1>About</h1>
            <div>
                Back to <Link href="/">Home</Link>
            </div>
        </>
    );
}
