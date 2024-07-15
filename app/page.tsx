import Link from "next/link";


const Home = () => {
    return (
        <>
            <tr>
                <th>
                    <h1>Home</h1>
                </th>
            </tr>
            <tr>
                <td>
                    <p>Hello World! This is the Home page</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>
                        Visit the <Link href="/about">About</Link> page.
                    </p>
                </td>
            </tr>
        </>
    );
};


export default Home;
