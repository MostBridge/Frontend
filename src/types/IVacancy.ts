import IProfession from 'types/IProffesion';
import IUser from 'types/IUser';
import ITown from 'types/ITown';
import IEmployment from 'types/IEmployment';
import ITechnology from 'types/ITechnology';

export enum Status {
  active = 'Активная',
  not_active = 'Не активная',
  archived = 'Архивная',
  hidden = 'Скрытая',
}

export enum Education {
  high = 'Высшее' as any,
  high_profile = 'Высшее профильное' as any,
  no_matter = 'Не важно' as any,
  secondary_professional = 'Средне-техническое' as any,
}

export enum Grade {
  junior = 'Junior' as any,
  middle = 'Middle' as any,
}

export enum Experience {
  no = 'Нет опыта' as any,
  one = 'Опыт 1 - 3 года' as any,
  three = 'Опыт 3 - 6 лет' as any,
}

export default interface IVacancy {
  id?: number;
  title?: string;
  company?: string;
  country?: string;
  education?: Education;
  status?: Status;
  author?: IUser;
  grade: Grade;
  profession?: IProfession;
  town?: ITown;
  employment?: IEmployment;
  experience?: Experience;
  description?: string;
  technology?: ITechnology[];
  created_date?: Date;
}
