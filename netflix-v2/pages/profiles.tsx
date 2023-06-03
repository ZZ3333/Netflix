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
            <div className=" flex flex-col">

            </div>
        </div>
    )
}

export default Profiles;