import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { CarCard, ShowMore, SearchBar } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 9,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <div
        className="mt-40 rounded-lg  padding-x padding-y max-width bg-blue-200"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-blue-800 ">
            Choose the Car You like Best
          </h1>
        </div>
        <div className="home__filters ">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={Math.ceil((searchParams.limit || 9) / 9)} // Set limit to 18 and round up
              isNext={(searchParams.limit || 9) > allCars.length} // Set limit to 18
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-blue-800 text-xl font-bold">
              Failed to fetch results
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
