import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr(),
  description: DS.attr(),
  status: DS.attr(),
  exposure: DS.attr(),

  isPaused: function() {
    return this.get('status') == "suspended"
  }.property('status'),
  canPause: function() {
    return this.get('status') != "locked"
  }.property('status'),
  isLocked: function() {
    return this.get('status') == "locked"
  }.property('status'),
  canLock: function() {
    return this.get('status') == "suspended" || this.get('status') == "locked"
  }.property('status'),
  canReset: function() {
    return this.get('status') == "active" || this.get('status') == "suspended"
  }.property('status'),
  canDelete: function() {
    return this.get('status') == "locked"
  }.property('status'),
  canMore: function() {
    return true
  }.property('status')
});
