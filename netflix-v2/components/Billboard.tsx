import useBillboard from "@/hooks/useBillboards";
import React from "react";

const Billboard =() => {
    const {data} = useBillboard()
    return (
        <div className="relative h-[56.25vw]">
            <video
            className="
            w-full
            h-[56.25vw]
            object-cover
            brightness-[60%]
            "
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>
            </video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%]">
                    {data?.title}
                </p>
            </div>
        </div>
    )
}

export default Billboard;