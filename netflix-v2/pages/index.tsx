import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

}

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-green-500 text-left">Playing with Netflix</h1>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout!</button>

    </>
  )
}
