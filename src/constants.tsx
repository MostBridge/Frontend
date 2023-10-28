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

      export { ITSpecialties, currencies, qualification, education, experience, typeEmployment }