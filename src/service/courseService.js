import { GlobalContext } from "../context";
import axios from "axios";
import { useContext } from "react";

const CourseService = () => {

    const { token } = useContext(GlobalContext);

    const http = axios.create({
        baseURL: process.env.BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });


    const getAllCourses = async () => {
        try {
            const courses = await http.get("/course/get-all-courses");
            if (courses) {
                return courses;
            }
        } catch (error) {
            console.log("Error in get All Courses Part", error);
        }
    }

    const getAllEnrolledCourses = async (studentId) => {
        try {
            const courses = await http.get("/enroll/get-enrolled-courses/" + studentId);
            if (courses) {
                return courses;
            }
        } catch (error) {
            console.log("Error in get All enrolled Courses Part", error);
        }
    }


    return {
        getAllCourses,
        getAllEnrolledCourses
    }
}

export default CourseService