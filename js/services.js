const API_KEY = 'cc37f52375ccd001d6a49caafd8d3685';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>

const getData = url => { // функция делающая запрос к серверу
	return fetch(url)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
			throw `Что-то пошло не так, ошибка ${response.status}`;
		})
		.catch(err => console.error(err)); // отлавливаем ошибку и выводим в консоль
};

export const getTriends = async (type = 'all', period = 'week', page = 1) => { // Экспортируем функцию которая возвращает данные полученные с сервера
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`; // формируем URL
	return await getData(url);
}