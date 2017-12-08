new Vue({
  el: '.table_demo',

  components: {
    'user': $$user
  },

  computed: {

    toggleEditClass: function(){
        return "editing_users";
    },

    foundNoUsers: function(){
      return this.$eval("users | findUserSearch").length === 0;

      console.log(users);
      if(users.length === 0){
        return true;
      }
      return false;
    }
  },

  filters: {
    addText: function(value){
      return value + "added";
    },

    findUserSearch: function(value){
      var that = this;
      return value.filter(function(user){
        var userName = user.first_name + user.last_name;

        return userName.toLowerCase().indexOf(that.userSearchFilter.toLowerCase()) > -1;
      });
    }
  },

  computed: {

  },

  data: function(){
    return {
      userSearchFilter: "",
      userEditing: false,
      users: [
        {
          first_name: "Joel",
          last_name: "Field",
          dob: "22/02/1992"
        },
        {
          first_name: "Mark",
          last_name: "Zuckerberg",
          dob: "22/02/1992"
        },
        {
          first_name: "Elon",
          last_name: "Musk",
          dob: "22/02/1992"
        }

      ]
    }
  },

  methods: {

    removeUser: function(user){
      this.users.$remove(user);
    },

    addUser: function(){
      this.users.push({
          first_name: "new",
          last_name: "user",
      });
    }

  }
})


// Vue.component('user-component', $$user);
