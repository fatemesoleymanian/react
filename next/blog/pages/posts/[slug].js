

import styles from '../../styles/slug.module.css'
import { GraphQLClient ,gql } from 'graphql-request'

const graphCms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cldyssay51q3w01t2890d99mw/master");
const QUERY = gql`
query Post($slug : String!){
    post(where: {slug: $slug}){
        id,
    slug,
    titel,
    datePublished,
    content{
      html
    }
    author{
      name,
      avatar {
        url
      }
    }
    coverPhoto{
      url
    }
    }
}`;
const slugList = gql`
{
    posts{
        slug
    }
}`;

export async function getStaticPaths(){
    const {posts} = await graphCms.request(slugList);
    return{
        paths: posts.map((post)=> ({params: {slug : post.slug}})),
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const slug = params.slug;
  const data = await graphCms.request(QUERY,{slug});
  const post = data.post
  return {
    props:{
      post,
    },
    revalidate:10,
  }
}

export default function Slug({post}){
    return(
        <main className={styles.blog}>
            <img className={styles.cover} src={post.coverPhoto.url} />
            <div className={styles.title}>
                <img src={post.author.avatar.url} />
                <div className={styles.authtext}>
                    <h6>By {post.author.name}</h6>
                    <h6 className={styles.date}>{post.datePublished}</h6>
                </div>
            </div>
            <h2>{post.titel}</h2>
            <div className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content.html}}>

            </div>
        </main>
    )
}