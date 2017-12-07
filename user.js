var $$user = Vue.extend({

  props: ['user'],

  computed: {

    fullName: function(){
      if(this.user.first_name === "" && this.user.last_name === ""){
        return "Empty User";
      }

      return this.user.first_name + " " + this.user.last_name;
    },

    age: function(){

      var age = moment().diff(moment(this.user.dob, 'DD/MM/YYYY'), 'years');

      if(isNaN(age)){
        return "Invalid Date entered";
      }
      return age;

    }

  },

  template: `
      {{fullName}} (<i>age {{age}}</i>)
  `
  
})
