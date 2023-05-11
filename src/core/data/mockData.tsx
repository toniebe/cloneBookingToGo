import {itemBarProps} from '../components/atomics/ItemBar';

export type mockOptionType = {
  id: string;
  label: string;
};

export const mockProgressBar: itemBarProps[] = [
  {
    number: 1,
    status: true,
    description: 'Detail Pesanan',
  },
  {
    number: 2,
    status: false,
    description: 'Pembayaran',
  },
];

export const mockOption: mockOptionType[] = [
  {
    id: 'option1',
    label: 'Saya memesan untuk diri sendiri',
  },
  {
    id: 'option2',
    label: 'Saya memesan untuk orang lain',
  },
];

export const mockDropdown = [
  {label: 'Option 1', value: 'Option 1'},
  {label: 'Option 2', value: 'Option 2'},
  {label: 'Option 3', value: 'Option 3'},
];
