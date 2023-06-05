import { NextPageContext } from "next"
import { getSession } from "next-auth/react"

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permament: false
      }
    }
  }

  return {
    props: {}
  }

}

export default function Home() {
  return (
    <>
      <Navbar />
      

    </>
  )
}
