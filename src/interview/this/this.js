var user = "Andrey";

var obj = {
  user: "Alexey",
  prop: {
    user: "Alexandr",
    getUser() {
      return this.user;
    },
    getUserName: () => this.user,
  },
};

console.log(obj.prop.getUser());
console.log(obj.prop.getUserName());

var getUser = obj.prop.getUser;
var getUserName = obj.prop.getUserName;

console.log(getUser());
console.log(getUserName());
console.log(getUser.bind(obj)());
console.log(getUserName.bind(obj)());
