import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permament: false,
            }
        }
    }

    return {
        props: {}
    }
}


const Profiles = () => {
    return (
        <div className=" flex items-center h-full justify-center">
            <p className="text-white text-4xl">Profiles</p>
        </div>
    )
}

export default Profiles;