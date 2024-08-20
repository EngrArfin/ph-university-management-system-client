/* const arr = [1, 2, 3, 4, 5, 6];

const result = arr.reduce((acc, item) => {
  console.log(acc);
  return acc + item;
}, 0);
console.log("Final Result =>", result);
 */
/* const arr = [1, 2, 3, 4, 5, 6];

const result = arr.reduce((acc, item) => {
  acc.push(acc + item);
  return acc;
}, []);
console.log("Final Result =>", result); */

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "/admin/offere-course",
        element: "Create_Admin",
      },
    ],
  },
];

//new reduce system apply here 27-7 array reduce system here

/* const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);
console.log(newArray); */

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      lebel: "NAVLINK",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      lebel: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        lebel: "NAVLINK",
      })),
    });
  }
  return acc;
}, []);
console.log(newArray);
