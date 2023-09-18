import { CarProps, FilterProps } from "@types";

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const response = await fetch(
    `http://localhost:5000/users?title=${manufacturer}&year=${year}&level=${model}&limit=${limit}&roles=${fuel}`
  );
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(
    "https://png.pngtree.com/png-vector/20201223/ourmid/pngtree-online-course-learning-progress-vector-png-image_2608676.jpg"
  );
  return `${url}`;
};
