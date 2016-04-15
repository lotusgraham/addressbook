// user should be able to fill out form and save responses
// upon click on add, input should save into new contact
// new contact added to ul/list
// upon click on specific contact, contact view is displayed


function Contact(first, last, phone, mystreet, mycity, mystate) {
    // this.fullName = full;
    this.firstName = first;
    this.lastName = last;
    this.phoneNumber = phone;
    this.street = mystreet;
    this.city = mycity;
    this.state = mystate;
}
 $('#addstuff').click(function(){
 	var newContact = new Contact($('.firstName').val(),  $('.lastName').val(), $('.phoneNumber').val() );
 	$('.items').append('<li><a href="x.com">' + $('.firstName').val() + '</a></li>');
 	console.log(newContact);    
    arrayOfContacts.push(newContact);
 });

var arrayOfContacts = [];
