const contactBook = {
  contacts: [
    { name: "Іван", phone: "123456789", email: "ivan@example.com" },
    { name: "Олена", phone: "987654321", email: "olena@example.com" },
  ],

  addContact(name, phone, email) {
    this.contacts.push({ name, phone, email });
  },

  findContact(name) {
    const contact = this.contacts.find((c) => c.name === name);
    if (contact) {
      console.log("Знайдено контакт:", contact);
    } else {
      console.log("Контакт не знайдено");
    }
  },
};

contactBook.addContact("Андрій", "555666777", "andriy@example.com");
contactBook.findContact("Андрій");
