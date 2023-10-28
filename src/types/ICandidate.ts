import IEmployment from 'src/types/IEmployment';
import IContact from 'src/types/IContact';
import ITown from 'src/types/ITown';
import IProfession from 'src/types/IProffesion';
import { Experience, Grade } from 'src/types/IVacancy';

export default interface ICandidate {
  id?: number;
  first_name?: string;
  last_name?: string;
  experience?: Experience;
  employment: IEmployment[];
  project?: number;
  portfolio?: string;
  resume?: string;
  reviews?: string;
  contacts: IContact;
  town: ITown;
  profession: IProfession;
  grade?: Grade;
  photo?: string;
  is_favorited: boolean;
  is_viewed: boolean;
}
