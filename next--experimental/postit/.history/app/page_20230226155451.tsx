'use client';
import CreatePost from "./components/AddPost";

export default function Home() {
  return (
    <main>
      <h1 className="text-lg p-6">Are we ok?</h1>
      <CreatePost />
    </main>
  )
}
