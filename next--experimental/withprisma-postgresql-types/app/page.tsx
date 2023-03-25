
import Link from "next/link";
import FormPost from "./form";

export async function getPosts() {
  const posts = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if(!posts.ok) console.log(posts)
  return posts.json()
}

export default async function Home() {
  const data:{id: number; title: string}[] = await getPosts();
  return (
    <main className="py-4 px-48">
     <Link href={'/dashboard'} className='bg-teal-700 text-black font-bold p-3 rounded'>
     Go to dashboard
     </Link>
     <FormPost />
     {data.map((post)=>(
        <h1 key={post.id} className="py-6 text-lg">{post.title}</h1>
      ))}
    </main>
  )
}
