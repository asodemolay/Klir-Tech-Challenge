# KlirTechChallenge

This project was created to showcase Development knowledge in Angular and ASP.NET Core WebAPI.
The requirements to be assessed can be read on [this file](/KlirTechTest.pdf).

## Assumptions
* It's assumed that you have both Angular and .Net Core installed on your machine.
* Since the requirements don't specifies Database, all data are stored in memory. It's used a fake load to populate all data as in the requirement document.
* The requirement asks to implement a Shopping Cart but there's no user/buyer/customer specification. So the Shopping Cart works as a unique object, returning the same data for all connected instances.

## Step 1 - Back-end
To run the backend portion, you have two options:

#### Running from Visual Studio
Open the `Klir.TechChallenge.sln` in Visual Studio and click run ▶ the project `Klir.TechChallenge.Web.Api`
>I've created a launch profile called `Background` to run the project in background (with no UI) from Visual Studio. If you prefer, run the profile `KlirTechChallenge.Web.Api` to access the Swagger UI.

#### Running from Command Line / Terminal
Navigate to `aspnet-core/Klir.TechChallenge.Web.Api` and execute the command:
```
$ dotnet run .\Klir.TechChallenge.Web.Api.csproj
```
#### CORS
The CORS configuration was set to allow the front end access the back end with no restrictions
```csharp
services.AddCors(options =>
                {
                    options.AddPolicy(name: AllowSpecificOrigins,
                                      builder =>
                                      {
                                          builder.WithOrigins("http://localhost:4200")
                                          .AllowAnyMethod()
                                          .AllowAnyHeader();
                                      });
                });
```

## Step 2 - Front-end
Navigate to `angular`folder and restore the installed packages:
```
$ npm install
```
Once all references were restored, start the frontend locally with:
```
$ ng serve -o
```
This command will build the Angular application and also start it on port `4200`, besides opening your default web browser with the UI.

There are some instructions in the application home page.

#### Client Services
I used the [ng-swagger-gen](https://www.npmjs.com/package/ng-swagger-gen) to build the Client Services to my Angular application. This packages helps to save some time when connecting the frontend to backend.

### Visual Styles
It was not a request but since the company has [bootstrap](https://getbootstrap.com/) as a desirable skill, I tried to use it as much as possible.

## About the tests
Since tests were not *mandatory* but *recommended*, I've opt to focus in developing a function application. I'll develop the tests in a future.



