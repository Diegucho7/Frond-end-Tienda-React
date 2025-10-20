export interface AddRoomWizardFormData {
  roomType: string;
  roomName: string;
  bedRooms: number;
  noOfBed: number;
  roomSize: string;
  adults: number;
  childs: number;
  BathRooms: number;
  Balcony: number;
  pricing: number;
  allDayPricing: boolean;
  wifi: boolean;
  restrurent: boolean;
  pool: boolean;
  noSmoking: boolean;
  parking: boolean;
  beachView: boolean;
  balcony: boolean;
  hotelBar: boolean;
  commonAreas: boolean;
  tennisCourts: boolean;
  airconditioning: boolean;
  bathtub: boolean;
  flatScreenTv: boolean;
  pictures: File[];
}

export const addRoomDefaultFormData: AddRoomWizardFormData = {
  roomType: 'Presidential suite',
  roomName: 'Kempinski Jakarta',
  bedRooms: 1,
  noOfBed: 1,
  roomSize: '2.13 x 3.66 sq.m',
  adults: 2,
  childs: 1,
  BathRooms: 2,
  Balcony: 1,
  pricing: 894,
  allDayPricing: true,
  wifi: true,
  restrurent: true,
  pool: true,
  noSmoking: true,
  parking: true,
  beachView: true,
  balcony: true,
  hotelBar: true,
  commonAreas: true,
  tennisCourts: true,
  airconditioning: true,
  bathtub: true,
  flatScreenTv: true,
  pictures: []
};
