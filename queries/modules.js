import { Module } from "@/model/module.model";
import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "@/model/lesson.model";

export async function create(moduleData) {
    try {
        const module = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(module));
    } catch (error) {
        console.log(error);
    }
}

export async function getModule(moduleId){
    try {
        const module = await Module.findById(moduleId).
        populate({
            path: "lessonIds",
            model: Lesson
        }).lean();
        return replaceMongoIdInObject(module);
    } catch (error) {
        console.log(error);
    }
}