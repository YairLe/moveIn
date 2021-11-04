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
  rent: string
  tax: string
  committee: string
  rooms: string
  floorMin: string
  floorMax: string
  comments: string[];
  photos: string,

}