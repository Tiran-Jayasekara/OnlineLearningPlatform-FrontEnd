import { GlobalContext } from "../context";
import axios from "axios";
import { useContext } from "react";

const StudentService = () => {
    const { token } = useContext(GlobalContext);

    const http = axios.create({
        baseURL: process.env.BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });

    const Login = async (loginForm) => {
        try {
            const login = await http.post("/student/login", loginForm);
            if (login) {
                return login;
            }
        } catch (error) {
            console.log("Error in Student Login Part", error);
        }
    }

    const Register = async (registerForm) => {
        try {
            const register = await http.post("/student/add-student", registerForm);

            if (register) {
                return register;
            }
        } catch (error) {
            console.log("Error in Student Register Part", error);
        }
    }

    const enrollCourse = async (enrollForm) => {
        try {
            const enroll = await http.post("/enroll/enroll-course", enrollForm);
            if (enroll) {
                return enroll;
            }
        } catch (error) {
            console.log("Error in Student course enroll Part", error);
        }
    }


    const deleteEnrolledCourse = async (studentID, courseID) => {
        try {
            console.log(studentID, courseID);
            const deleteCourse = await http.delete(`/enroll/remove-enrollment/${studentID}/${courseID}`);
            if (deleteCourse) {
                return deleteCourse;
            }
        } catch (error) {
            console.log("Error in delete enrolled course part", error);
        }
    }



    return {
        Login,
        enrollCourse,
        deleteEnrolledCourse,
        Register
    }
}

export default StudentService