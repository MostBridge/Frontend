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
  employment?: IEmployment[];
  project?: number;
  portfolio?: string;
  resume?: string;
  reviews?: string;
  contacts?: IContact;
  town?: ITown;
  profession?: IProfession;
  photo?: string;
  is_favorited?: boolean;
  is_viewed?: boolean,
  grade?: Grade;
  experience?: Experience;
  technology?: [];
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
