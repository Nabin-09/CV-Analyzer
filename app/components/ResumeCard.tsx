import React from "react";
import { Link } from "react-router";

const ResumeCard = ({resume} : {resume: Resume}) =>{
    return(
        <Link to = {`/resume/${resume.id}`} className="resume-card animate-in fade-in duration-1000">
            <div className=" flex flex-col gap-2">
                <h2 className="!text-black font-bold break-words">
                    {resume.companyName}
                </h2>
            </div>
        </Link>
    )
}

export default ResumeCard