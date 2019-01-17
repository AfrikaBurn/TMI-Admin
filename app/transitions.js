export default function(){

  this.transition(
    this.fromRoute('login'),
    this.toRoute('users'),
    this.use('fade'),
    this.reverse('fade')
  ),

  this.transition(
    this.hasClass('login'),
    this.use('fade'),
    this.reverse('fade')
  )

}