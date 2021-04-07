# Instructions:
   - clone the repository
   - open server-side folder using your terminal and use "npm install" command to install the dependencies
      - use "npm start" to start the server
   - open client-side folder using your terminal and use "npm install" command to install the dependencies
      - use "npm start to start the client" 

# The goal
given the following array of users:

[
   {
      "name":"Hector",
      "address":"Mexico"
   },
   {
      "name":"Juan",
      "address":"Peru"
   },
   {
      "name":"Ignacio",
      "address":"Argentina"
   },
   {
      "name":"Samer",
      "address":"Egypt"
   },
   {
      "name":"John",
      "address":"USA"
   },
   {
      "name":"Mary",
      "address":"USA"
   },
   {
      "name":"Maria",
      "address":"Argentina"
   }
]

Client:
- there's a Text Field in the middle of the screen
- every time the user enters a letter a search is performed on the backend.
- when the results return, they are shown as a list below the text field. 

Server:
- a /search endpoint
- the backend will search inside the names of the users and return the list that match the name provided by the client.
