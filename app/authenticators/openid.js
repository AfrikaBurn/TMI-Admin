/**
 * @file Contains OpenID authentication
 */

import Base from 'ember-simple-auth/authenticators/base'
import { Promise } from 'rsvp'
import $ from 'jquery'


export default Base.extend({

  /**
   * @inheritdoc
   */
  restore() {
    return new Promise((resolve) => {
      resolve()
    })
  },

  /**
   * @inheritdoc
   */
  authenticate(credentials) {
    return new Promise((resolve, reject) => {
      $.post(
        {
          url: "http://127.0.0.1:3000/users/login",
          data: credentials,
          xhrFields: { withCredentials: true}
        }
      )
      .then((data) => { resolve(data)}, (errors) => reject(errors))
    })
  },

  /**
   * @inheritdoc
   */
  invalidate() {
    return new Promise((resolve, reject) => {
      $.get(
        {
          url: "http://127.0.0.1:3000/users/logout",
          xhrFields: { withCredentials: true}
        }
      )
      .then((data) => { resolve(data)}, (errors) => reject(errors))
    })
  }
})
