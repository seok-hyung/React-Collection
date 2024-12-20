import { OptionList } from '@/types/optionList';

export const headerOptionList: OptionList = [
  {
    label: '버튼 갯수',
    default: 3,
    items: [
      {
        id: 1,
        name: 1,
        optionValue: '1 개',
        extra: {
          tag: '버튼 1',
        },
      },
      {
        id: 2,
        name: 2,
        optionValue: '2 개',
        extra: {
          tag: '버튼 2',
        },
      },
      {
        id: 3,
        name: 3,
        optionValue: '3 개',
        extra: {
          tag: '버튼 3',
        },
      },
      {
        id: 4,
        name: 4,
        optionValue: '4 개',
        extra: {
          tag: '버튼 4',
        },
      },
      {
        id: 5,
        name: 5,
        optionValue: '5 개',
        extra: {
          tag: '버튼 5',
        },
      },
    ],
  },

  {
    label: '버튼 간격',
    default: 'gap-2',
    items: [
      {
        id: 1,
        name: 'gap-2',
        optionValue: 'gap-2',
      },
      {
        id: 2,
        name: 'gap-4',
        optionValue: 'gap-4',
      },
      {
        id: 3,
        name: 'gap-6',
        optionValue: 'gap-6',
      },
      {
        id: 4,
        name: 'gap-8',
        optionValue: 'gap-8',
      },
      {
        id: 5,
        name: 'gap-10',
        optionValue: 'gap-10',
      },
    ],
  },

  // {
  //   label: '버튼 색상',
  //   default: 'bg-gray-300',
  // },

  // {
  //   label: '버튼 크기',
  //   default: 'text-sm',
  // },

  // {
  //   label: '버튼 텍스트 색상',
  //   default: 'text-black',
  // },

  // {
  //   label: '버튼 텍스트 크기',
  //   default: 'text-sm',
  // },

  // {
  //   label: '버튼 텍스트 굵기',
  //   default: 'font-normal',
  // },

  // {
  //   label: '버튼 텍스트 대소문자',
  //   default: 'capitalize',
  // },
];
