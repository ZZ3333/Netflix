import { signOut } from "next-auth/react"

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-green-500 text-left">Playing with Netflix</h1>
      <button onClick={() => signOut()}>Logout!</button>

    </>
  )
}
