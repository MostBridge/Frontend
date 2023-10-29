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
  high = 'Высшее',
  high_profile = 'Высшее профильное',
  no_matter = 'Не важно',
  secondary_professional = 'Средне-техническое',
}

export enum Grade {
  junior = 'Junior',
  middle = 'Middle',
}

export enum Experience {
  no = 'Нет опыта',
  one = 'Опыт 1 - 3 года',
  three = 'Опыт 3 - 6 лет',
}

export default interface IVacancy {
  id?: number;
  title?: string;
  company?: string;
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
