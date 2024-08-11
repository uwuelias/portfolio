"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "To-do List",
    description:
      "To-do list that will help you efficiently manage and organize tasks with a simple interface",
    imageSrc: "/to-do-list.png",
    projectLink: "https://uwuelias-todo-list-react.netlify.app/",
    codeLink: "https://github.com/uwuelias/todo-list-react",
  },
  {
    title: "Expense Tracker",
    description:
      "Track your expenses with this React app that supports multiple payment methods.",
    imageSrc: "/expense-tracker.png",
    projectLink: "https://uwuelias-expense-tracker.netlify.app/",
    codeLink: "https://github.com/uwuelias/expense-tracker",
  },
  {
    title: "Supply List App",
    description:
      "Manage your supply list efficiently with local storage support.",
    imageSrc: "/college-mat-list.png",
    projectLink: "https://college-mat-list.vercel.app/",
    codeLink: "https://github.com/uwuelias/college-mat-list",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-64 object-cover"
                width={720}
                height={480}
                priority={true}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <Link
                    href={project.projectLink}
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.codeLink}
                    className="text-blue-500 hover:underline"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
