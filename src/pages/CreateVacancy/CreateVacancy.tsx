import BackButton from 'components/custom/BackButton/BackButton';
// import React from 'react'
import styles from './CreateVacancy.module.css';
import { MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import Button from 'components/mui/Button/Button';
import Input from 'components/mui/Input/Input';
import Filters, { Filter } from './Filters/Filters';
import TextAreaBlock from './TextAreaBlock/TextAreaBlock';
import SkillBlock from './SkillBlock/SkillBlock';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import DonePopup from 'components/custom/DonePopup/DonePopup';
import Label from 'components/mui/Label/Label';
import Select from 'components/mui/Select/Select';
import {
  CreateVacancyParams,
  useCreateVacancyMutation,
  useGetEmploymentsQuery,
  useGetTechnologiesQuery,
  useGetTownsQuery,
} from '../../redux/slices/API';
import { CURRENCIES as currencies } from 'utils/constants';
import { Education, Experience, Grade } from 'types/IVacancy';

const CreateVacancy = () => {
  const [vacancy, setVacancy] = useState<CreateVacancyParams>({ country: 'Россия', employment: [] });
  const [set, setSet] = useState(new Set<string>());
  const [value, setValue] = useState<string | null>(null);
  const [isPopupDoneOpen, setIsPopupDoneOpen] = useState(false);

  const getTownsQuery = useGetTownsQuery();
  const getEmploymentsQuery = useGetEmploymentsQuery();
  const getTechnologiesQuery = useGetTechnologiesQuery();
  const [createVacancy] = useCreateVacancyMutation();

  const towns = getTownsQuery.data?.results;
  const employments = getEmploymentsQuery.data?.results.map(({ id, name }) => ({ id, value: name } as Filter));
  const grades = Object.keys(Grade).map((key) => ({ id: key, value: Grade[key as any] } as Filter));
  const expiriencies = Object.keys(Experience).map((key) => ({ id: key, value: Experience[key as any] } as Filter));
  const technologies = getTechnologiesQuery.data?.results?.map((technology) => technology.name);

  const renderEducation = (value: string) => {
    return <>{Education[value as any]}</>;
  };

  const renderTown = (value: number) => {
    const town = towns?.find((town) => town.id === value);
    return <>{town?.city}</>;
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setVacancy({ ...vacancy, [name]: value });
  };

  const handleSelect = (event: SelectChangeEvent<string | number>) => {
    const name = event.target.name;
    const value = event.target.value;
    setVacancy({ ...vacancy, [name]: value });
  };

  const handleEmploymentClick = (id?: number | string) => {
    let employment = [...vacancy.employment!];
    if (employment.some((other) => other === id)) {
      employment = employment.filter((other) => other !== id);
    } else {
      employment.push((id as number) || 0);
    }
    setVacancy({ ...vacancy, employment });
  };

  const handleGradeClick = (id?: number | string) => {
    setVacancy({ ...vacancy, grade: id as string });
  };

  const handleExpirienceClick = (id?: number | string) => {
    setVacancy({ ...vacancy, experience: id as string });
  };

  const handleSkillblock = (_event: unknown, newValue: string | null) => {
    setValue(newValue);
    if (newValue !== null) {
      setSet((el) => {
        const updatedSet = el.add(newValue);
        const array = Array.from(updatedSet.values());
        const result = getTechnologiesQuery.data?.results
          ?.filter((technology) => array.some((obj) => obj === technology.name))
          .map((obj) => obj.id) as number[] | undefined;
        setVacancy({ ...vacancy, technology: result });
        return updatedSet;
      });
    }
  };

  const handlePublicSubmit = async () => {
    const params: CreateVacancyParams = JSON.parse(JSON.stringify(vacancy));
    params.status = 'active';
    params.profession = 2;
    try {
      await createVacancy(params);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPopupDoneOpen(true);
    }
  };

  const handleHiddenSubmit = async () => {
    const params: CreateVacancyParams = JSON.parse(JSON.stringify(vacancy));
    params.status = 'hidden';
    params.profession = 2;
    try {
      await createVacancy(params);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPopupDoneOpen(true);
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className={styles.main}>
      <section className={styles.top_section}>
        <BackButton onBack={goBack} />
        <div className={styles.header}>
          <Typography className={styles.text} variant="h2" component="h1">
            Создание вакансии
          </Typography>
          <ul className={styles.list_of_buttons}>
            <li>
              <Button variant="outlined" size="small" className={styles.button} onClick={handleHiddenSubmit}>
                Создать скрытую вакансию
              </Button>
            </li>
            <li>
              <Button variant="contained" size="small" className={styles.button} onClick={handlePublicSubmit}>
                Опубликовать вакансию
              </Button>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.bottom_section}>
        <article className={styles.article}>
          <Typography className={styles.text} variant="h3" component="h2">
            Основная информация
          </Typography>
          <ul className={styles.list_of_inputs}>
            <Label label="Название должности/cпециальность">
              <Input size="small" value={vacancy?.title || ''} onChange={handleInput} name="title" fullWidth />
            </Label>
            <Label label="Компания">
              <Input size="small" value={vacancy?.company || ''} onChange={handleInput} name="company" fullWidth />
            </Label>
          </ul>
          <ul className={styles.list_of_inputs}>
            <Label label="Страна">
              <Input size="small" value={vacancy?.country || ''} onChange={handleInput} name="country" fullWidth />
            </Label>
            <Label label="Город" fullWidth>
              <Select
                fullWidth
                name="town"
                value={vacancy?.town || ''}
                onChange={handleSelect}
                renderValue={renderTown}
              >
                {towns?.map((town) => (
                  <MenuItem key={town.id} value={town.id}>
                    {town.city}
                  </MenuItem>
                ))}
              </Select>
            </Label>
          </ul>
          <ul className={styles.list_of_inputs}>
            <Label label="Зарплата">
              <Input placeholder="От" size="small" fullWidth />
            </Label>
            <Input placeholder="До" size="small" fullWidth />
            <Label label="Валюта" fullWidth={false}>
              <Select defaultValue="₽ Рубль" className={styles.currency}>
                {currencies.map((el, id) => (
                  <MenuItem key={id} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </Label>
          </ul>
          <Label label="Образование">
            <Select
              className={styles.education}
              placeholder="Выберите из списка"
              defaultValue=""
              name="education"
              renderValue={renderEducation}
              onChange={handleSelect}
            >
              {Object.keys(Education).map((key) => (
                <MenuItem key={key} value={key}>
                  {Education[key as any]}
                </MenuItem>
              ))}
            </Select>
          </Label>
          <Filters filters={employments} title="Условия" onClick={handleEmploymentClick} />
          <Filters filters={grades} title="Квалификация" onClick={handleGradeClick} />
          <Filters filters={expiriencies} title="Опыт в специальности" onClick={handleExpirienceClick} />
        </article>
        <article className={styles.article}>
          <Typography className={styles.text} variant="h3" component="h2">
            Детали
          </Typography>
          <TextAreaBlock label="Описание вакансии" name="description" onChange={handleInput} />
          <TextAreaBlock label="Ожидания от кандидата" />
          <SkillBlock array={technologies} value={value} onChange={handleSkillblock} set={set} setSet={setSet} />
        </article>
      </section>
      {isPopupDoneOpen && <DonePopup onClose={() => setIsPopupDoneOpen(false)} isPopupDoneOpen={isPopupDoneOpen} />}
    </main>
  );
};

export default CreateVacancy;
