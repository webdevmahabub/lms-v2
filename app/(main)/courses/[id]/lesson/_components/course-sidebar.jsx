"use client";
import { useState } from "react";
import { CourseProgress } from "@/components/course-progress";



export const CourseSidebar = async ({courseId}) => {

  const course = await getCourseDetails(courseId);
  const loggedinUser = await getLoggedInUser();

  const updatedataModules = await Promise.all(course?.modules.map(async(module) => {
    const moduleId = module._id.toString();
    const lessons = module?.lessonIds;

  const updatedLessons = await Promise.all(lessons.map(async (lesson) => {
    const lessonId = lesson._id.toString();
    
  }))


  }))

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const isActive = true;
  const isCompleted = true;
  
  return (
    <>
      <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
        <div className="p-8 flex flex-col border-b">
          <h1 className="font-semibold">Reactive Accelerator</h1>
          {/* Check purchase */}
          {
            <div className="mt-10">
              <CourseProgress variant="success" value={80} />
            </div>
          }
        </div>
      
        <SidebarModules/>

        <div className="w-full px-6">
          <GiveReview/>
          <DownloadCertificate/>
        </div> 
        
      </div>
    </>
  );
};
