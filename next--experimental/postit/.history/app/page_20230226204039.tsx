'use client';
import CreatePost from "./components/AddPost";
import GetPosts from "./components/GetPosts";

export default function Home() {
  return (
    <main>
      <CreatePost />
      <GetPosts />
    </main>
  )
}
