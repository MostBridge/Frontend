import IEmployment from 'types/IEmployment';
import IContact from 'types/IContact';
import ITown from 'types/ITown';
import IProfession from 'types/IProffesion';
import { Experience, Grade } from 'types/IVacancy';

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
