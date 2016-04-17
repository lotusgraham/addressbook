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

var indexOfContact = 0;

 $('#addstuff').click(function(){
 	var newContact = new Contact($('.firstName').val(),  $('.lastName').val(), $('.phoneNumber').val(), $('.street').val(), $('.city').val(), $('.state').val() );
 	$('.items').append('<li class="specificItem" data=' + indexOfContact + '><a>' + $('.firstName').val() + '</a></li>');
    indexOfContact++;
 	console.log(newContact);
    arrayOfContacts.push(newContact);
 });

var arrayOfContacts = [];

// $('.items').click(function(){
//     $('.displayedFirstName').append(arrayOfContacts[0].firstName);
//     $('.displayedLastName').append(arrayOfContacts[0].lastName);
// });


$('.items').on("click", ".specificItem", function(){
    console.log($(this));
    $('.displayedFirstName').append(arrayOfContacts[0].firstName);
    $('.displayedLastName').append(arrayOfContacts[0].lastName);
});

// get the data attribute from the li that got clicked (=firstname)
// look thru contacts for a firstname match
// once you get the correct contact, load their properties into the html
