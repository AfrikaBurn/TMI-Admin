import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    search(param){
      if (param !== '') {
        return this.store.query('post', { name: param });
      } else {
        return this.store.findAll('post');
      }
    }

  }

});
