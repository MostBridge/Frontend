  //УДАЛИТЬ

const currencies = [
    { value: '₽', text: '₽' },
    { value: '$', text: '$' },
    { value: '€', text: '€' },
  ];

  const education = [
    { value: 'Не указано', text: 'Не указано' },
    { value: 'Среднее профессиональное', text: 'Среднее профессиональное' },
    { value: 'Высшее', text: 'Высшее' },
  ];

  const qualification = [
    { value: 'Intern', text: 'Intern' },
    { value: 'Junior', text: 'Junior' },
    { value: 'Middle', text: 'Middle'},
    { value: 'Senior', text: 'Senior' },
    { value: 'Lead', text: 'Lead' },
  ];

  const experience = [
    { value: 'Без опыта', text: 'Без опыта' },
    { value: 'До 1 года', text: 'До 1 года' },
    { value: '1–2 года', text: '1–2 года' },
    { value: '2–3 года', text: '2–3 года' },
    { value: 'более 3 лет', text: 'более 3 лет' }
  ];

    const ITSpecialties = [
        { value: 'Разработчик ПО', text: 'Разработчик ПО' },
        { value: 'Аналитик данных', text: 'Аналитик данных' },
        { value: 'Системный администратор', text: 'Системный администратор' },
        { value: 'Инженер DevOps', text: 'Инженер DevOps' },
        { value: 'Дизайнер UI/UX', text: 'Дизайнер UI/UX' },
        { value: 'Аналитик безопасности', text: 'Аналитик безопасности' },
        { value: 'Администратор БД', text: 'Администратор БД' },
      ];
    
      const typeEmployment = [
        { value: 'Полная занятость', text: 'Полная занятость' },
        { value: 'Частичная занятость', text: 'Частичная занятость' },
        { value: 'Проектная занятость', text: 'Проектная занятость' },
        { value: 'Фриланс', text: 'Фриланс' },
      ];

        //DELETE THIS MASSIVE
  const vacancies = [
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

      export { vacancies, ITSpecialties, currencies, qualification, education, experience, typeEmployment }