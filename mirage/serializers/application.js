import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);
    let request = {
      post: {
        title: json.data.attributes.title,
        content: json.data.attributes.content,
        attachment: json.data.attributes.attachment,
        key: json.data.attributes.key
      }
    };

    return request;
  }
});
