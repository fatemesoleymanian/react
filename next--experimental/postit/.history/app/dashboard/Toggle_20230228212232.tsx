'use client'

export default function Toggle(){

    return(
        <div className="fixed bg-black/40 h-full w-full z-20 left-0 top-0">
            <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
                <h2 className="text-xl">
                    Are You Sure You want to delete this post?😐
                </h2>
                <h3 className="text-red-600 text-sm">
                    Pressing the delete button will permenantly delete your post.

                </h3>
            </div>
        </div>
    )
}