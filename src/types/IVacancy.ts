import IProfession from 'src/types/IProffesion';
import IUser from 'src/types/IUser';
import ITown from 'src/types/ITown';
import IEmployment from 'src/types/IEmployment';
import ITechnology from 'src/types/ITechnology';

export type Education = 'high' | 'high_profile' | 'no_matter' | 'secondary_professional';
export type Status = 'active' | 'not_active' | 'archived' | 'hidden';
export type Grade = 'junior' | 'middle';
export type Experience = 'no' | 'one' | 'three';

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
  technology?: ITechnology;
  created_date?: Date;
}
