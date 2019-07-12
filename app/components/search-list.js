import Component from '@ember/component';

export default Component.extend({

  classNames: ['list-filter'],
  value: '',
  timeout: false,

  actions: {

    search() {

      let thisObject = this
      let searchValue = this.value
      let searchAction = this.search

      if (this.timeout) clearTimeout(this.timeout)

      this.timeout = setTimeout(
        () => {
          searchAction(searchValue).then(
            (results) => thisObject.set('results', results)
          )
        },
        500
      )
    }
  },

  init() {
    this._super(...arguments)
    this.search('').then((results) => this.set('results', results));
  },

});
