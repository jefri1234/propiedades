"use client"
import Link from "next/link"
import {signIn,useSession,signOut} from 'next-auth/react'
import { useRouter } from "next/navigation";
function Navbar() {

  const router = useRouter()
  const {data:session} =useSession();

  console.log(session)
  return (
    
    <nav className=" bg-slate-900 flex justify-between px-24 text-white items-center py-3">
        <Link href="/">
          <h1>
              Inmoviliaria
          </h1>
        </Link>
        <Link href="/dashboard">
                    Dashboard
                </Link>
                <Link href="#">
                    comprar
                </Link>
                <Link href="#">
                    vender
                </Link>
      {session?.user ?(
                <div className=" flex gap-x-2 items-center">

                <p>{session.user.name}</p>
                <img src={session.user.image} alt="" className=" w-10 h-10 rounded-full cursor-pointer"/>
                
                <button onClick={async()=>{
                  await signOut()
                  router.push('/')
                }}
                className=" text-red-700 font-bold hover:text-red-500"
                >Logout</button>
            </div>
      ):(
        <button onClick={() =>{
          signIn()
        }} className=" bg-sky-400 px-3 py-2 rounded-md">
          Sign In 
        </button>
      )}
    </nav>
  )
}



export default Navbar
