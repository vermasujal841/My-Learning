'use client'
import React from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";
import { useParams } from "next/navigation";

const Page = () => {
    const params = useParams(); // Correct way to access params in client components

    if (!params?.id) {
        return <div>Loading...</div>; // Handle undefined params
    }
    return (
        <div>
            <CourseDetailsPage id={params.id} />
        </div>
    )
}

export default Page;
 