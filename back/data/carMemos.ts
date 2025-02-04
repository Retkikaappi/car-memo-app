import { CarMemo } from '../src/types';

const carMemoMock: CarMemo[] = [
  {
    id: 'A1B2',
    licensePlate: 'ABC-123',
    pictures: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    make: 'Toyota',
    model: 'Corolla',
    description: 'Regular maintenance done. Needs new tires before winter.',
  },
  {
    id: 'C3D4',
    licensePlate: 'XYZ-789',
    pictures: [
      'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1134857/pexels-photo-1134857.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    make: 'Volkswagen',
    model: 'Golf',
    description: 'Scratches on the right door. Oil changed last month.',
  },
  {
    id: 'E5F6',
    licensePlate: 'JKL-456',
    pictures: [
      'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    make: 'Ford',
    model: 'Focus',
    description: 'Check engine light on, needs diagnostics.',
  },
  {
    id: 'G7H8',
    licensePlate: 'MNO-321',
    pictures: [
      'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/787472/pexels-photo-787472.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    make: 'Volvo',
    model: 'V60',
    description: 'New brake pads installed. Next service due in 10,000 km.',
  },
  {
    id: 'I9J0',
    licensePlate: 'QWE-654',
    pictures: [
      'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    make: 'BMW',
    model: '320d',
    description: 'Recently detailed. Slight oil leak spotted under the engine.',
  },
  {
    id: 'K1L2',
    licensePlate: 'ABC-321',
    pictures: [
      'https://images.unsplash.com/photo-1602033960165-9cea185953eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlaGljbGV8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D',
    ],
    make: 'BMW',
    model: '320d',
    description: 'LIRUMLARUM lipusm rethrtjrt.',
  },
];

export default carMemoMock;
