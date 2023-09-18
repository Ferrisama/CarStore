import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { CarCard, ShowMore, SearchBar } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });
  const limitedCars = allCars.slice(0, searchParams.limit || 9);

  const isDataEmpty =
    !Array.isArray(limitedCars) || limitedCars.length < 1 || !limitedCars;

  return (
    <main className="overflow-hidden">
      <div
        className="mt-0 rounded-lg  padding-x padding-y  bg-transparent"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-blue-800 ">
            Choose the Course that suits you best!
          </h1>
        </div>
        <div className="home__filters ">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {limitedCars?.map((car) => (
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
