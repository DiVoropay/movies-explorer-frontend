function errorHandler(serverError) {

    switch (serverError) {
      case ('Ошибка 500'): return 'На сервере произошла ошибка';

      case ('Ошибка 409'): return 'Пользователь с таким email уже существует.';

      case ('Ошибка 404'): return 'Страница по указанному маршруту не найдена';

      case ('Ошибка 403'): return 'При загрузке данных пользователя произошла ошибка';

      case ('Ошибка 400'): return 'Вы ввели неправильный логин или пароль';

      case ('Ошибка 401'): return 'При загрузке данных пользователя произошла ошибка';

      default: return serverError;
    }

}

export default errorHandler;