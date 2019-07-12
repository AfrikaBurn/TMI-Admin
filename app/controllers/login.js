import Controller from '@ember/controller'
import { inject as service } from '@ember/service'


export default Controller.extend({

  session: service(),

  loginFailed: false,
  isProcessing: false,
  isSlowConnection: false,
  timeout: null,

  actions:{

    /**
     * Submits authentication details, attaches handlers
     */
    login: function(){

      var credentials = this.getProperties("username", "password");

      this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));
      this.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      this.get('session').authenticate('authenticator:openid', credentials)
        .then((data) => { this.success(data)})
        .catch((reason) => { this.failure(reason.error || reason)})
    },

    /**
     * Reset the form
     */
    reset: function() {

      clearTimeout(this.get("timeout"));

      this.setProperties({
        isProcessing: false,
        isSlowConnection: false,
        username: '',
        password: ''
      });
    }
  },

  /**
   * Successful login handler
   */
  success: function() {
    this.get('target').replaceWith("users")
  },

  /**
   * Failed login handler
   */
  failure: function() {
    this.reset()
    this.set("loginFailed", true);
  },

  /**
   * Slow connection indicator
   */
  slowConnection: function() {
    this.set("isSlowConnection", true);
  }
});
