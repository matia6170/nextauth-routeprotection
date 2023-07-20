"use client";
import { signOut } from "next-auth/react";

export default function Signout() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="border-2 border-red-300 rounded-lg p-3 hover:bg-red-300 hover:text-white transition duration-300 "
        onClick={async () => {
            alert("sign out button pressed")
            console.log(await signOut({ callbackUrl: 'http://localhost:3000/' }))
        }}
      >
        Sign Out???
      </button>
    </div>
  );
}
