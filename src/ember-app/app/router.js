import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-semya15-контроллер-l');
  this.route('i-i-s-semya15-контроллер-e',
  { path: 'i-i-s-semya15-контроллер-e/:id' });
  this.route('i-i-s-semya15-контроллер-e.new',
  { path: 'i-i-s-semya15-контроллер-e/new' });
  this.route('i-i-s-semya15-темпа-устан-l');
  this.route('i-i-s-semya15-темпа-устан-e',
  { path: 'i-i-s-semya15-темпа-устан-e/:id' });
  this.route('i-i-s-semya15-темпа-устан-e.new',
  { path: 'i-i-s-semya15-темпа-устан-e/new' });
});

export default Router;
