import Head from 'next/head'; // Imports head from Next.js
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'; // Imports layout and sisteTitle from layout.js. siteTitle a variable in layout.js
import utilStyles from '../styles/utils.module.css';

// Function creates Home based on the importet 
// compnonents from next.js and layout.js file
// Compnents are JSX elements
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Oerjan and I am studying for my AS in Full Stack web development.
          At the moment I am working as System administrator.
        </p>
        <p>
          This is a sample website we are building in CS55.13 class {' '}
          <Link href="posts/first-post">First post</Link>.
        </p>
      </section>
    </Layout>
  );
}