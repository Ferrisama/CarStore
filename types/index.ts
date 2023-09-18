import { MouseEventHandler } from "react";

export interface CarProps {
  roles: string;

  title: string;
  level: string;

  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface Filter2Props {
  title?: string;
  duration_in_minutes?: number;
  roles?: string;
  limit?: number;
  levels?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface Home2Props {
  searchParams: Filter2Props;
}

export interface CarCardProps {
  model: string;
  make: string;

  year: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
