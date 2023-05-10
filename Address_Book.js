// create an array to hold the contacts UC1
let addressBook = [];

// create a constructor function to create contact objects
function Contact(firstName, lastName, address, city, state, zip, phone, email) {
  // validate the inputs UC2
  if (!/^[A-Z][a-z]{2,}$/.test(firstName)) {
    throw new Error("Invalid first name. Must start with capital letter and have at least 3 characters.");
  }
  if (!/^[A-Z][a-z]{2,}$/.test(lastName)) {
    throw new Error("Invalid last name. Must start with capital letter and have at least 3 characters.");
  }
  if (!/^[A-Za-z0-9\s]{4,}$/.test(address)) {
    throw new Error("Invalid address. Must have at least 4 characters.");
  }
  if (!/^[A-Za-z\s]{4,}$/.test(city)) {
    throw new Error("Invalid city. Must have at least 4 characters.");
  }
  if (!/^[A-Z]{2}$/.test(state)) {
    throw new Error("Invalid state. Must be a 2-letter abbreviation.");
  }
  if (!/^\d{6}$/.test(zip)) {
    throw new Error("Invalid ZIP code. Must be a 5-digit number.");
  }
  if (!/^\d{10}$/.test(phone)) {
    throw new Error("Invalid phone number. Must be in the format xxxxxxxxxx.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email address.");
  }

  // if all inputs are valid, create the contact object
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.email = email;
}

// create a new empty address book UC3
//let newAddressBook = [];

// add some sample contacts to the address book
try {
    addressBook.push(new Contact("Aswini", "Reddy", "Cumbum", "Cumbum", "AP", "123456", "9876543210", "ashu444@gmail.com"));
    addressBook.push(new Contact("Sweety", "Reddy", "AnnaNagar", "Chennai", "TN", "287651", "8765432190", "sweety23@gmail.com"));
} catch (error) {
  console.log(error.message);
}


// // add a new contact to the new address book UC3
// try {
//     newAddressBook.push(new Contact("Sweety", "Reddy", "AnnaNagar", "Chennai", "TN", "287651", "8765432190", "sweety23@gmail.com"));
//   } catch (error) {
//     console.log(error.message);
//   }

// function to find a contact by first and last name and return its index in the address book array UC4
function findContactIndex(firstName, lastName) {
    for (let i = 0; i < addressBook.length; i++) {
      if (addressBook[i].firstName === firstName && addressBook[i].lastName === lastName) {
        return i;
      }
    }
    return -1;
  }

  // function to update an existing contact's information
  function updateContact(firstName, lastName, address, city, state, zip, phone, email) {
    let index = findContactIndex(firstName, lastName);
    if (index === -1) {
      console.log("Contact not found.");
      return;
    }
    try {
      addressBook[index] = new Contact(firstName, lastName, address, city, state, zip, phone, email);
      console.log("Contact updated.");
    } catch (error) {
      console.log(error.message);
    }
  }
  
// example usage of the findContactIndex() and updateContact() functions
// find the index of a contact by first and last name 
let index = findContactIndex("Sweety", "Reddy");

// update the contact's information
updateContact("Ishu", "Reddy", "AnnaNagar", "Chennai", "TN", "287651", "8765432190", "sweety23@gmail.com");

// display the updated contact's information
console.log(addressBook[index]);


// find the index of the contact to delete UC5
function deleteContact(firstName, lastName) {

    let index = findContactIndex(firstName, lastName);
    
    // if the contact is found, remove it from the address book array
    if (index !== -1) {
      addressBook.splice(index, 1);
      console.log(`Contact ${firstName} ${lastName} has been deleted.`);
    } else {
      console.log(`Contact ${firstName} ${lastName} not found.`);
    }
  }
  
  deleteContact("Sweety", "Reddy");

// display the contents of the new address book
for (let i = 0; i < addressBook.length; i++) {
    console.log(`Name: ${addressBook[i].firstName} ${addressBook[i].lastName}`);
    console.log(`Address: ${addressBook[i].address}`);
    console.log(`City: ${addressBook[i].city}`);
    console.log(`State: ${addressBook[i].state}`);
    console.log(`ZIP: ${addressBook[i].zip}`);
    console.log(`Phone: ${addressBook[i].phone}`);
    console.log(`Email: ${addressBook[i].email}`);
    console.log("------------------------------");
    }

    function countContacts() {
      let count = addressBook.reduce(function(acc, curr) {
        return acc + 1;
      }, 0);
      console.log(`There are ${count} contacts in the address book.`);
    }  
    countContacts();
  