// user should be able to fill out form and save responses
// upon click on add, input should save into new contact
// new contact added to ul/list
// upon click on specific contact, contact view is displayed

var contact = {
    fullName: "Graham Whitley",
    firstName: "Graham",
    lastName: "Whitley",
    phoneNumber: "252-286-8899",
    street: "209 e. knox st.",
    city: "Durham",
    state: "NC"
};
 var newContact =   Object.create(contact);
    
 newContact.fullName = $('.firstname').text('')
    
//create an object named Contact
//store first name last name, number, street, city, and state in Contact

