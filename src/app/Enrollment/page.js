"use client"
import PageHeader from '@/components/pageHeader'
import { GlobalContext } from '@/context';
import CourseService from '@/service/courseService';
import StudentService from '@/service/studentService';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Enrollment = () => {
    const [courses, setCourses] = useState();
    const { getAllEnrolledCourses } = CourseService();
    const { deleteEnrolledCourse } = StudentService();
    const { student } = useContext(GlobalContext);

    useEffect(() => {
        getAllCourses();
    }, [])

    const getAllCourses = async () => {
        const courses = await getAllEnrolledCourses(student?._id);
        setCourses(courses?.data?.allCourses)
    }

    const RemoveCourse = async (data) => {

        const studentId = student?._id;
        const courseId = data?.courseId?._id;

        const deleteData = await deleteEnrolledCourse(studentId, courseId)
        if (deleteData?.data?.message === "remove success") {
            toast.success("remove success");
            getAllCourses();

        } else {
            toast.success("Something Wrong");
        }
    }

    return (
        <>
            <PageHeader
                header="Enrolled Courses"
                description="Learn Anything You Need"
            />

            <div className="grid grid-cols-2 md:grid-cols-3">
                {courses
                    ? courses.map((data, index) => (
                        <div
                            key={data._id}
                            className="relative md:mt-6 mt-4 text-gray-700 bg-white shadow-md mx-2 rounded-md m-0 md:m-4 hover:shadow-lg  hover:transform hover:scale-105  cursor-pointer"
                        >
                            <div className="pt-2 m-2 mt-2 ml-0 lg:px-2 px-0 ">
                                <p
                                    className={`mb-4 md:m-4 text-sm text-gray-600 dark:text-gray-600 ${true ? "line-clamp-8" : ""
                                        }`}
                                >
                                    <b className="text-[10px] md:text-[20px]">Course Name : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.courseName}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">Course Price : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.coursePrice}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">Duration : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.duration}
                                    </span>
                                    <br></br>

                                    <b className="text-[10px] md:text-[20px]">Seat : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.courseCapacity}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">Start Date : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.startDate}
                                    </span>
                                    <br></br>
                                    <b className="text-[10px] md:text-[20px]">End Date : </b>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.endDate}
                                    </span>
                                    <br></br>
                                    <br></br>
                                    <span className="text-[10px] md:text-[20px]">
                                        {data?.courseId.description}
                                    </span>
                                </p>
                            </div>
                            <div className="p-2 pt-0">

                                <div className="flex flex-row justify-between">
                                    <button
                                        className=" font-bold text-center  bg-red-600 text-white px-2 py-1 rounded-md"
                                        type="button"
                                        onClick={() => {
                                            RemoveCourse(data);

                                        }}
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))
                    : "No Course"}
            </div>

        </>
    )
}

export default Enrollment
