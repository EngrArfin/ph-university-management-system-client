import OfferedCourse from "../pages/student/OfferedCourse ";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <OfferedCourse />,
  },
];
