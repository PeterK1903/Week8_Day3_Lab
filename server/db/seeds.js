use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Barry White",
    email: "barrywhite@hotmail.com",
    isCheckedIn: true
  },
  {
    name: "Barbara White",
    email: "barbarawhite@gmail.com",
    isCheckedIn: true
  },
  {
    name: "Alan Bond",
    email: "yummylettuce@hotmail.co.uk",
    isCheckedIn: false
  }
])
