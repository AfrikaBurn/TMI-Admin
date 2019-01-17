import Component from '@ember/component';

export default Component.extend({
  actions: {

    pause(user){
      if (user.canPause) {
        user.set('status', user.get('status') == 'active' ? 'suspended' : 'active')
        user.save()
      }
    },

    lock(user){
      if (user.canLock) {
        user.set('status', user.get('status') == 'locked' ? 'active' : 'locked')
        user.save()
      }
    },

    reset(){},
    delete(){},
    more(){}
  },
});
