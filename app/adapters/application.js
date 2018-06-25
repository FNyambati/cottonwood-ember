import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  host: 'localhost:4200',
});
