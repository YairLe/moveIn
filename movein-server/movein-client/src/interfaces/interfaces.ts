export interface IRequirements {
  minPrice: number;
  maxPrice: number;
  tax: number;
  committee: number;
  city: string;
  neighborhood: string[];
  minRooms: number;
  maxRooms: number;
  essentials: string[];
}

export interface INewApartment {

  street: string
  neighborhood: string
  city: string
  rent: number
  tax: number
  committee: number
  rooms: number
  floorMin: number
  floorMax: number
  comments: string[];
  photos: string,

}

export interface IApartments {
  street: string;
  apartmentId: string;
  image: { data: any; type: any };
}
