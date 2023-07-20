import {options} from "../api/auth/[...nextauth]/options"
import {getServerSession} from "next-auth/next"
import {redirect} from "next/navigation"

export default async function ProtectedWithOutMiddleware() {
    const session = await getServerSession(options)
    
    if (!session) {
        
    }
    return (
      <div className="container mx-auto flex justify-center border-4  border-blue-300">
        <h1 className="text-4xl font-thin">This page should be protected<hr/>{session?<span>you are in the right place</span>: <span>get out of here!</span>}</h1>

        
      </div>
    );
  }
  