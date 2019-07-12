import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({

  name: DS.attr(),
  description: DS.attr(),
  status: DS.attr(),
  exposure: DS.attr(),

  isPaused: computed('status', function() {
    return this.get('status') == "suspended"
  }),
  canPause: computed('status', function() {
    return this.get('status') != "locked"
  }),
  isLocked: computed('status', function() {
    return this.get('status') == "locked"
  }),
  canLock: computed('status', function() {
    return ["active", "locked", "suspended"].indexOf(this.get('status')) > -1
  }),
  canReset: computed('status', function() {
    return ["active", "suspended"].indexOf(this.get('status')) > -1
  }),
  canDelete: computed('status', function() {
    return this.get('status') == "suspended"
  }),
  canMore: computed('status', function() {
    return true
  })
});
