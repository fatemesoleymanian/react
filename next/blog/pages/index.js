import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GraphQLClient ,gql } from 'graphql-request'
import BlogCard from '@/components/BlogCard';

const graphCms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cldyssay51q3w01t2890d99mw/master");
const QUERY = gql`
{
  posts {
    id
    slug
    titel
    datePublished
    content{
      html
    }
    author{
      name
      avatar {
        url
      }
    }
    coverPhoto{
      url
    }
  }
}`;

export async function getStaticProps(){
  const {posts} = await graphCms.request(QUERY);
  return {
    props:{
      posts,
    },
    revalidate:10,
  }
}

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts.map((post)=>(
          <BlogCard title={post.titel} author={post.author} 
          coverPhoto={post.coverPhoto} key={post.id} datePublished={post.datePublished}
          slug={post.slug}/>
        ))}
      </main>
      </>
  )
}
