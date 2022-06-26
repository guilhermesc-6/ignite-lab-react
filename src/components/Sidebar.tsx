import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  isModalActive: true | false;
}

export const Sidebar = (props: SidebarProps) => {
  const { data } = useGetLessonsQuery();
  const { isModalActive } = props;

  return (
    <aside
      className={`w-[348px] min-h-full bg-gray-700 p-6 border-l border-gray-600 transition-transform absolute right-0 z-50 lg:static lg:z-auto lg:right-auto lg:translate-x-0 ${
        !isModalActive && "translate-x-full"
      }`}
    >
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
