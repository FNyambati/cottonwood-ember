import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  attachment: DS.attr('string'),
  key: DS.attr('string'),
  createdAt: DS.attr(),
  updated_at: DS.attr(),
  deleted_at: DS.attr()
});
