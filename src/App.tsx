import React from "react";
import { useQuery } from "react-query";

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { getTemplateCats } from "./services/firebaseLogic";

function App() {
  const { isLoading, error, data } = useQuery("catTemplates", async () => {
    const templateCats = await getTemplateCats();

    return templateCats;
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error)
    return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <Navbar />
      <div className="flex justify-center pt-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((el) => (
            <Card data={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
