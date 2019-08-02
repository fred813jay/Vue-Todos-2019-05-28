var vm = new Vue({
  el: "#app",
  data: {
    userinput: "",
    user: "",
    FinishedTasks: "",
    taskinput: "",
    tasks: [
      { id: 0, title: "enjoy the day", status: false },
      { id: 1, title: "Everything i do i do it big", status: false}
    ]
  },
  methods:{
    adduser: function(){
      this.user = this.userinput
    },
    addtask: function(taskinput){
      if (taskinput.length != 0){
        this.tasks.push({
          id: this.tasks.length,
          title: this.taskinput,
          status: false
        });
      }
      this.taskinput = ""
    },
    CheckStatus: function(task){
      this.tasks[task.id].status = !this.tasks[task.id].status;
    },
    remove: function(task){
      var r= confirm("Are you sure?")
      if (r == true){
        this.tasks.splice((task.id),1)
        for (let i=0 ; i<this.tasks.length ; i++){
          this.tasks[i].id = i
        }
      }
    },
    edit: function(task){
      var e = prompt("Please edit your ToDos here",this.tasks[task.id].title)
      if (e){
        this.tasks[task.id].title = e
      }
    }
  },
  computed:{
    unfinished(){
      return this.tasks.filter(function(task) {
        return !task.status;
      });
    },
    finsined(){
       return this.tasks.filter(function(task) {
        return task.status;
      });     
    }
  }
})