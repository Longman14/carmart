
import { UpdateClassifiedType } from "@/app/schemas/classified.schema";
import { Classified, Prisma } from "@prisma/client";
import { ChangeEvent } from "react";


type Params = {
    [x: string]: string | string[];
  };
  
export type PrevState = {
  success: boolean;
  message: string;

}
  export type PageProps = {
    params?: Promise<Params>;
    searchParams: Promise<{ [x: string]: string | string[] | undefined }>;
  };

  export interface SidebarProps extends AwaitedPageProps {
    minMaxValues: Prisma.GetClassifiedAggregateType<{
      _min: {
        year: true;
        odoReading: true;
        price: true;
      };
      _max: {
        year: true;
        odoReading: true;
        price: true;
      };
    }>;
  }

  export type FilterOptions<LType, VType> = Array<{
    label: LType;
    value: VType;
  }>;

  export interface TaxonomyFiltersProps extends AwaitedPageProps {
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  }
  
  
  export type AwaitedPageProps = {
    params?: Awaited<PageProps["params"]>;
    searchParams: Awaited<PageProps["searchParams"]>;
  };

  export type ClassifiedWithImages = Prisma.ClassifiedGetPayload<{
    include:{
      images: true;
    }
  }>;

  export enum MultiStepFormEnum {
    WELCOME = 1,
    SELECT_DATE = 2,
    SUBMIT_DETAILS = 3,
  }
  
  export interface Favourites {
    ids: number[];
  }

  export interface MultiStepFormComponentProps extends AwaitedPageProps {
      classified: Prisma.ClassifiedGetPayload<{
          include:{make: true}
      }>
  }

  export interface ProgressArgs{
    sent: number;
    total: number;
    uuid: string;
    percentage: number;
    key?: string;
}



export type ClassifiedKeys = keyof Pick<
	Classified,
	| "status"
	| "title"
	| "vrm"
	| "id"
	| "views"
	| "year"
	| "colour"
	| "price"
	| "createdAt"
>;


export type ClassifiedImages = UpdateClassifiedType["images"];

export type CustomerKeys = keyof Pick<
	Prisma.CustomerGetPayload<{ include: { classified: true } }>,
	| "id"
	| "email"
	| "mobile"
	| "firstName"
	| "lastName"
	| "updatedAt"
	| "createdAt"
	| "status"
	| "bookingDate"
	| "classified"
>;

export type CustomerWithClassified = Prisma.CustomerGetPayload<{
	include: { classified: true };
}>;