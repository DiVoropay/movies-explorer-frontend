import foto from '../images/student.jpg';

const student = {
  name: 'Дмитрий',
  info: 'Фронтенд-разработчик, 35 лет',
  description: 'Я родился и живу в Таганроге, закончил физико-математический факультет педагогического института. Со студенческих лет попал в сферу торговли. По прошествии лет, вектор развития меня вывел на сферу, которая мне всегда была близка. Мой путь в программировании только начинается и я рад, что стаю на тропе непрерывного развития!',
  photo: foto,
  social: [
    {
      title: 'Facebook',
      href: '#'},
    {
      title: 'GitHub',
      href: 'https://github.com/DiVoropay'
    }
  ],
  portfolio: [
    {
      title: 'Статичный сайт',
      href: 'https://github.com/DiVoropay/how-to-learn'
    },
    {
      title: 'Адаптивный сайт',
      href: 'https://github.com/DiVoropay/russian-travel'
    },
    {
      title: 'Одностраничное приложение',
      href: 'https://github.com/DiVoropay/react-mesto-api-full'
    }
  ]
}

export default student;