import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Semya15',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya15',
          title: 'Semya15'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-semya15-контроллер-l': IISSemya15КонтроллерLForm,
    'i-i-s-semya15-темпа-устан-l': IISSemya15ТемпаУстанLForm,
    'i-i-s-semya15-контроллер-e': IISSemya15КонтроллерEForm,
    'i-i-s-semya15-темпа-устан-e': IISSemya15ТемпаУстанEForm
  },

});

export default translations;
