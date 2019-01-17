import DS from 'ember-data';


export default DS.JSONAPIAdapter.extend({

  host: 'http://127.0.0.1:3000',

  ajax(url, method, hash) {

    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {
      withCredentials: true
    };

    return this._super(url, method, hash);
  }

});
