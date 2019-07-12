import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    search(param){
      if (param !== '') {
        return this.store.query('group', { name: param });
      } else {
        return this.store.findAll('group');
      }
    }

  }

});