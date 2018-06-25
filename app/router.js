import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('messenger', function() {
    this.route('message', {path: ':post_id'}, function() {
      this.route('show')
      this.route('edit')
    })
    this.route('new')
  })
});

export default Router;
