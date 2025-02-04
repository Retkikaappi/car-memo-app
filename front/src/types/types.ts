export interface NewCarMemo {
  licensePlate: string;
  make: string;
  model: string;
  description: string;
  pictures: File;
}

export interface CarMemo {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  description: string;
  pictures: string[];
}
