import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

// Exports the layout of the post data
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

// Gets teh staic paths for the blog posts 
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Exports the Static Props from 
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); // Removed await ch 32
  
  return {
    props: {
      postData,
    },
  };
}