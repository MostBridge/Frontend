import IEmployment from 'types/IEmployment';
import IContact from 'types/IContact';
import ITown from 'types/ITown';
import IProfession from 'types/IProffesion';

export default interface ITech {
  ids: number;
  name: string;
}
export default interface ICandidate {
  id?: number;
  first_name?: string;
  last_name?: string;
  experience?: Experience;
  employment?: IEmployment[];
  project?: number;
  portfolio?: string;
  resume?: string;
  reviews?: string;
  contacts?: IContact;
  town?: ITown;
  profession?: IProfession;
  grade?: Grade;
  photo?: string;
  is_favorited?: boolean;
  is_viewed?: boolean,
}

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
