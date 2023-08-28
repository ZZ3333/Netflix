import { NextPageContext } from "next"
import { getSession } from "next-auth/react"

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";


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
      <Billboard />
      <div className="pb-40">
      <MovieList />
      </div>
      
      

    </>
  )
  
}