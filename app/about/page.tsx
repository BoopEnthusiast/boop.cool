import Link from "next/link";


export const metadata = {
    title: 'About',
}


export default function About() {
    return (
        <>
            <tr>
                <th>
                    <h1>About</h1>
                </th>            
            </tr>
            <tr>
                <td>
                    <p>
                        Back to <Link href="/">Home</Link>
                    </p>
                </td>            
            </tr>
            
        </>
    );
}
