import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    search(param){
      if (param !== '') {
        return this.store.query('profile', { name: param });
      } else {
        return this.store.findAll('profile');
      }
    }

  }

});
