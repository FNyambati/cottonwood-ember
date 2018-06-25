
import Controller from '@ember/controller';

export default Ember.Controller.extend({
  newPost: {
    title: this.get('postTitle'),
    content: this.get('postContent'),
    attachment: this.get('postAttachment'),
    key: 'fred.nyambati',
  },
  actions: {
    save(){
      let created = this.get('store').createRecord('posts', this.get("newPost"));
      this.set("newPost", {});
      created.save().then(()=>{
        this.transitionToRoute('messenger.message.show', model);
      });
    }
  }
});
