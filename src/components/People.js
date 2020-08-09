import React, { useState } from "react";
import { useQuery, usePaginatedQuery } from "react-query";
import { Person } from "./Person";

const People = () => {
  const [page, setPage] = useState(1);
  const fetchpeople = async (key, page) => {
    console.log(page);
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    return res.json();
  };

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["people", page],
    fetchpeople,
    {
      staleTime: 2000,
      onSuccess: () => console.log("data fetched Success"),
      //onError
    }
  ); //cacheTime all config

  return (
    <div>
      <h2>Peoples</h2>
      {status == "error" && <div>Error fetching data</div>}
      {status == "loading" && <div>Loading data...</div>}
      {status == "success" && (
        <>
          <button
            disabled={page == 1}
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
          >
            Previous Button
          </button>
          <span>{page}</span>
          <button
            disabled={!latestData || !latestData.next}
            onClick={() =>
              setPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              )
            }
          >
            Next Button
          </button>
          <div>
            {resolvedData.results.map((people) => (
              <Person key={people.name} people={people} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default People;
