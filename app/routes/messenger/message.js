import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.store.findRecord('posts', params.post_id)
  },
});
