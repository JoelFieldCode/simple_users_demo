new Vue({
  el: '.table_demo',

  components: {
    'user': $$user
  },

  computed: {

    toggleEditClass: function(){
      return this.editingUsers ? "editing_users" : "";
    },

    filterReturnedNoUsers: function(){
      return this.$eval("users | filterBy filterUser").length === 0;
    }

  },

  data: function(){
    return {
      users: [
        {
            first_name: "Joel",
            last_name: "Field",
            dob: "22/02/1992",
        },
        {
            first_name: "Zach",
            last_name: "Kominar",
            dob: "22/02/1850",
        },
        {
            first_name: "Mark",
            last_name: "Zuckerberg",
            dob: "22/02/1980",
        },
        {
            first_name: "Elon",
            last_name: "Musk",
            dob: "22/02/1500",
        },
      ],
      editingUsers: false,
    }
  },

  methods: {

    removeUser: function(user){
      this.users.$remove(user);
    },

    addUser: function(){
      this.users.push({
        first_name: "",
        last_name: "",
        dob: "15/08/1990"
      });

    }
  }
})
