import IVacancy, { Experience, Grade } from 'types/IVacancy';
import ICandidate from 'types/ICandidate';
import candidate from 'assets/images/candidate.png';

export const VACANCIES_LIST: IVacancy[] = [
  { id: 1, profession: { name: 'UX/UI дизайнер' }, grade: Grade.junior },
  { id: 2, profession: { name: 'Motion дизайнер' }, grade: Grade.junior },
  { id: 3, profession: { name: 'Графический дизайнер' }, grade: Grade.junior },
];

export const CANDIDATES_LIST: ICandidate[] = [
  {
    id: 1,
    first_name: 'Людмила',
    last_name: 'Петрушевская',
    profession: { name: 'Графический дизайнер' },
    grade: Grade.junior,
    town: {
      city: 'Москва',
    },
    photo: candidate,
    experience: Experience.one,
    is_favorited: true,
    is_viewed: true,
    technology: [
      { id: 0, name: 'Дизайн иконок' },
      { id: 1, name: 'Растровая графика' },
      { id: 2, name: 'Разработка фирменного стиля' },
      { id: 3, name: 'Дизайн полиграфической продукции' },
      { id: 4, name: 'Векторная графика' },
      { id: 5, name: 'Создание иллюстраций' },
      { id: 6, name: 'Создание скетчей' },
    ],
  },
];
