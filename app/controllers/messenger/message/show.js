import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost() {
      this.get("model").destroyRecord().then(() => {
        this.transitionToRoute('messenger');
      })
    }
  },
  noFile: Ember.computed.empty('model.attachment')
});
