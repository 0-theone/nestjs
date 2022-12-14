# nestjs
Dependencies

- @nestjs/common: contains vast majority of functions, classes, ect
- @nestjs/platform-express: handles http requests
- reflect-metadata: make decorators work

Server - In short, what is the main idea of this project: 
Request -> validate data contained in the request (pipe) -> user is authenticated (guard) -> route the request to a particular function (controller) -> run business logic (service) -> access db (repository) -> return response.

Parts of Nest (Terminology)
 - Controllers -> handles incoming requests
 - Services -> handles data access and business logic
 - Modules -> groups together code
 - Pipes -> validates incoming data
 - Filters -> handles errors that occur during request handling
 - Guards -> handles authentication
 - Interceptors -> Adds extra logic to incoming requests or outgoing responses
 - Repositories -> handles data stored in db

Conventions
- One class per file (some exceptions)
- Class names should include kind 
- Name of class and name of file should always match