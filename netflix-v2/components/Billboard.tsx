import useBillboard from "@/hooks/useBillboards";
import React from "react";

const Billboard =() => {
    const {data} = useBillboard()
    return (
        <div className="relative h-[56.25vw]">
            <video src={data?.videoUrl}></video>
        </div>
    )
}

export default Billboard;