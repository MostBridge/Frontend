import IVacancy, { Experience, Grade } from 'types/IVacancy';
import ICandidate from 'types/ICandidate';
import candidate from 'assets/images/candidate.png';
import { generateCandidates } from './utils';

export const VACANCIES_LIST: IVacancy[] = [
  { id: 1, profession: { name: 'UX/UI дизайнер' }, grade: Grade.junior },
  { id: 2, profession: { name: 'Motion дизайнер' }, grade: Grade.junior },
  { id: 3, profession: { name: 'Графический дизайнер' }, grade: Grade.junior },
];

const CANDIDATE_TEMPLATE: ICandidate = {
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
};

export const CANDIDATES_LIST: ICandidate[] = generateCandidates(CANDIDATE_TEMPLATE, 3);

export const FAVORITE_LIST: ICandidate[] = generateCandidates(CANDIDATE_TEMPLATE, 7);

//УДАЛИТЬ

export const currencies = [
  { value: '₽', text: '₽' },
  { value: '$', text: '$' },
  { value: '€', text: '€' },
];

export const CURRENCIES = ['₽ Рубль', '$ Доллар', '€ Евро'];

export const qualification = [
  { value: 'Intern', text: 'Intern' },
  { value: 'Junior', text: 'Junior' },
  { value: 'Middle', text: 'Middle' },
  { value: 'Senior', text: 'Senior' },
  { value: 'Lead', text: 'Lead' },
];

export const education = [
  { value: 'Не указано', text: 'Не указано' },
  { value: 'Среднее профессиональное', text: 'Среднее профессиональное' },
  { value: 'Высшее', text: 'Высшее' },
];

export const experience = [
  { value: 'Без опыта', text: 'Без опыта' },
  { value: 'До 1 года', text: 'До 1 года' },
  { value: '1–2 года', text: '1–2 года' },
  { value: '2–3 года', text: '2–3 года' },
  { value: 'более 3 лет', text: 'более 3 лет' },
];

export const ITSpecialties = [
  { value: 'Разработчик ПО', text: 'Разработчик ПО' },
  { value: 'Аналитик данных', text: 'Аналитик данных' },
  { value: 'Системный администратор', text: 'Системный администратор' },
  { value: 'Инженер DevOps', text: 'Инженер DevOps' },
  { value: 'Дизайнер UI/UX', text: 'Дизайнер UI/UX' },
  { value: 'Аналитик безопасности', text: 'Аналитик безопасности' },
  { value: 'Администратор БД', text: 'Администратор БД' },
];

export const typeEmployment = [
  { value: 'Полная занятость', text: 'Полная занятость' },
  { value: 'Частичная занятость', text: 'Частичная занятость' },
  { value: 'Проектная занятость', text: 'Проектная занятость' },
  { value: 'Фриланс', text: 'Фриланс' },
];

//DELETE THIS MASSIVE
export const vacancies = [
  {
    title: 'Графический дизайнер',
    status: 'Опубликовано',
    date: '12 октября',
    city: 'Москва',
    salary: '100 000',
    level: 'Middle',
    experience: 'до 1 года',
  },
  {
    title: 'Веб-разработчик',
    status: 'Опубликовано',
    date: '10 октября',
    city: 'Санкт-Петербург',
    salary: '120 000',
    level: 'Junior',
    experience: 'до 6 месяцев',
  },
  {
    title: 'QA инженер',
    status: 'В поиске',
    date: '14 октября',
    city: 'Казань',
    salary: '90 000',
    level: 'Middle',
    experience: 'до 2 лет',
  },
  {
    title: 'Менеджер проекта',
    status: 'Опубликовано',
    date: '15 октября',
    city: 'Екатеринбург',
    salary: '130 000',
    level: 'Senior',
    experience: 'от 3 до 5 лет',
  },
  {
    title: 'Дизайнер интерфейсов',
    status: 'Опубликовано',
    date: '11 октября',
    city: 'Новосибирск',
    salary: '110 000',
    level: 'Middle',
    experience: 'до 1,5 лет',
  },
  {
    title: 'Android разработчик',
    status: 'В поиске',
    date: '9 октября',
    city: 'Самара',
    salary: '125 000',
    level: 'Middle',
    experience: 'до 3 лет',
  },
];
