import Head from 'next/head'; // Imports the head compnent from next.js
import Link from 'next/link'; // Imports the link componentn from next.js
import Layout from '../../components/layout'; // Imports the layout from the custom layout.js file

// Function that creates the first post elements based the
// elemnts imported from next.js and layout.js
// Compnents are JSX elements
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}