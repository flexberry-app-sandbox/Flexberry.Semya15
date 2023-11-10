import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSemya15КонтроллерLForm from './forms/i-i-s-semya15-контроллер-l';
import IISSemya15ТемпаУстанLForm from './forms/i-i-s-semya15-темпа-устан-l';
import IISSemya15КонтроллерEForm from './forms/i-i-s-semya15-контроллер-e';
import IISSemya15ТемпаУстанEForm from './forms/i-i-s-semya15-темпа-устан-e';
import IISSemya15ДатчикModel from './models/i-i-s-semya15-датчик';
import IISSemya15КонтроллерModel from './models/i-i-s-semya15-контроллер';
import IISSemya15РелеModel from './models/i-i-s-semya15-реле';
import IISSemya15ТемпаУстанModel from './models/i-i-s-semya15-темпа-устан';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-semya15-датчик': IISSemya15ДатчикModel,
    'i-i-s-semya15-контроллер': IISSemya15КонтроллерModel,
    'i-i-s-semya15-реле': IISSemya15РелеModel,
    'i-i-s-semya15-темпа-устан': IISSemya15ТемпаУстанModel
  },

  'application-name': 'Semya15',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Semya15',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya15',
          title: 'Semya15'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        semya15: {
          caption: 'Semya15',
          title: 'Semya15',
          'i-i-s-semya15-темпа-устан-l': {
            caption: 'Темпа устан',
            title: ''
          },
          'i-i-s-semya15-контроллер-l': {
            caption: 'Контроллер',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-semya15-контроллер-l': IISSemya15КонтроллерLForm,
    'i-i-s-semya15-темпа-устан-l': IISSemya15ТемпаУстанLForm,
    'i-i-s-semya15-контроллер-e': IISSemya15КонтроллерEForm,
    'i-i-s-semya15-темпа-устан-e': IISSemya15ТемпаУстанEForm
  },

});

export default translations;
