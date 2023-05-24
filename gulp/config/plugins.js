import replace from 'gulp-replace' //  Поиск и замена
import plumber from 'gulp-plumber'  //  Обработка ошибок
import notify from 'gulp-notify' //  Сообщение (подсказка)
import browserSync from 'browser-sync' //  Сообщение (подсказка)
import newer from 'gulp-newer' // Проверка обновления

export const plugins = {
	replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
}
