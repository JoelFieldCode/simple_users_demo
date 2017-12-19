new Vue({
  el: '.table_demo',

  components: {
    'user': $$user
  },

  computed: {

  },

  filters: {

  },

  data: function(){
    return {
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

  }
})


// Vue.component('user-component', $$user);
