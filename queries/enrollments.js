import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Enrollment } from "@/model/enrollment-model"; 
import { Course } from "@/model/course-model";
export async function getEnrollmentsForCourse(courseId){
    const enrollments = await Enrollment.find({course: courseId}).lean();
    return replaceMongoIdInArray(enrollments);
}

export async function enrollForCourse(courseId, userId, paymentMethod){
    const newEnrollment = {
        course: courseId,
        student: userId,
        method: paymentMethod,
        enrollment_date: Date.now(),
        status: 'not-started'
    }
    try {
        const response = await Enrollment.create(newEnrollment);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function getEnrollmentsForUser(userId){
    try {
        const enrollments = await Enrollment.find({ student: userId})
        .populate({
            path: "course",
            model: Course,
        }).lean();
        return replaceMongoIdInArray(enrollments);
    } catch (err) {
        console.log(err);
    }
}

export async function hasEnrollmentForCourse(courseId, studentId){
    try {
        const enrollment = await Enrollment.findOne({
            course: courseId,
            student: studentId
        }).populate({
            path: "course",
            model: Course
        }).lean();

        if (!enrollment) return false;
        
        return true;
    } catch (error) {
        console.log(error);
    }
}