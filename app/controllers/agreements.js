import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    search(param){
      if (param !== '') {
        return this.store.query('agreement', { name: param });
      } else {
        return this.store.findAll('agreement');
      }
    }

  }

});
