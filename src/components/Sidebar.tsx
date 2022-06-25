import { List, X } from "phosphor-react";
import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <aside
      className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 transition-transform absolute right-0 z-50 lg:static lg:z-auto lg:right-auto lg:translate-x-0 ${
        !isModalActive && "translate-x-full"
      }`}
    >
      <span
        className={`absolute text-gray-100 flex items-center gap-2 cursor-pointer lg:hidden ${
          isModalActive
            ? "top-[-3.1rem] right-5"
            : "top-[-3.1rem] left-[-5.8rem]"
        }`}
        onClick={handleModal}
      >
        Aulas
        {isModalActive ? (
          <X color="#8ec2de" size={24} />
        ) : (
          <List color="#8ec2de" size={24} />
        )}
      </span>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};
