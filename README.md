# signalr-angularjs
Chat webapp built using ASP.NET Core SignalR and AngularJS. ASP.NET Core 2.1 tickles my fancy.

## TL;DR

Tools used:
- .NET Core 2.1 SDK
- Visual Studio Code

Scaffolded using dotnet new meaning Sqlite is used, so project should run on all supported platforms with no changes needed.

To continuously rebuild changes in .cs files

    dotnet watch run --environment=Development

And fire up your browser.

VS Code also has excellent debugging support for C#.

## Code

Initial project template (Razor) created using dotnet cli

    dotnet new razor --auth Individual

Based off of the [getting started article for Signal R](https://docs.microsoft.com/en-us/aspnet/core/signalr/get-started?view=aspnetcore-2.1&tabs=visual-studio-code)

The angularjs code I have written myself, i.e. chat.js

It showcases how to provide a SignalR hub connection to an angularjs component through DI. That sounds excruciatingly convoluted, but is actually quite simple, if you've spent 100 hours on pluralsight and doing tutorials with a glacial pace over the last two-three years, like I have :) I wonder if anyone will ever read this. Send me a message if you do!

I called the project Stuff because why not.

Haven't really incorporated auth, but decided to include it. Perhaps I'll update the app to use identity. Perhaps this code will simply never be updated. Perhaps whatever :)

## Client side dependencies
Downloaded using npm install and manually copied into wwwroot\lib. I didn't even use --save, 
that's how evil I am. Mohaha

I can't wait to read about the new tool that replaces yarn's replacement (that's a lie, I can wait)
