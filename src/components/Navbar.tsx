"use client"
import Link from "next/link"
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
function Navbar() {

  const router = useRouter()
  const { data: session } = useSession();

  console.log(session)
  return (
    
    <nav className=" bg-slate-900 flex justify-between px-24 text-white items-center py-3">
        <Link href="/">
          <h1>
              NEXT GOOGLE
          </h1>
        </Link>
        <Link href="/dashboard">
                    Dashboard
                </Link>
      {session?.user ?(
                <div className=" flex gap-x-2 items-center">
                  <p>{session.user.name}</p>
                  <img src={session.user.image} alt="" className=" w-10 h-10 rounded-full cursor-pointer" />

                  <button onClick={async () => {
                    await signOut()
                    router.push('/')
                  }}
                    className=" text-red-700 font-bold hover:text-red-500"
                  >Logout</button>
                </div>
              ) : (
                <button onClick={() => {
                  signIn()
                }} className="py-1.5 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Iniciar Sesión
                </button>
              )}


            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}



export default Navbar
