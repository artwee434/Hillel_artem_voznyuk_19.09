const user = {
  name: "Олександр",
  age: 28,
  email: "oleksandr@example.com",

  getUserInfo: function() {
    console.log("Інформація про користувача:");
    console.log("Ім'я: " + this.name);
    console.log("Вік: " + this.age);
    console.log("Email: " + this.email);
  }
};

user.getUserInfo();
