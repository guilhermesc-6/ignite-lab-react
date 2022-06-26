import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
      <main className="flex flex-1 relative overflow-x-hidden">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar isModalActive={isModalActive} />
      </main>
    </div>
  );
};
