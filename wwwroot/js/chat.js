
var app = angular.module('chatApp', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            template: '<chat-main></chat-main>'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.service('chatService', function () {
    var self = this;

    self.connection = new signalR.HubConnectionBuilder()
        .withUrl("/hubs/stuff")
        .build();

    self.connection.start().catch(err => console.error(err.toString()));

    self.sendMessage = function (user, message) {
        self.connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    };
});

app.component('chatMain', {
    templateUrl: '/app/chat-main.html',
    controller: function ChatMainController($scope, chatService) {
        var self = this;

        self.chatService = chatService

        self.user = '';
        self.message = '';
        self.messages = [];

        self.$onInit = function () {
            self.chatService.connection.on('ReceiveMessage', function (user, message) {
                self.messages.push({user: user, message: message});
                $scope.$apply();
            });
        };

        self.sendMessage = function () {
            self.chatService.sendMessage(self.user, self.message);
            self.message = '';
        };
    }
});



// connection.on("ReceiveMessage", (user, message) => {
//     const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//     const encodedMsg = user + " says " + msg;
//     const li = document.createElement("li");
//     li.textContent = encodedMsg;
//     document.getElementById("messagesList").appendChild(li);
// });

// connection.start().catch(err => console.error(err.toString()));

// const sendEventHandler = event => {
//     const user = document.getElementById("userInput").value;
//     const message = document.getElementById("messageInput").value;
//     connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
//     event.preventDefault();
// };

// document.getElementById("sendButton").addEventListener("click", sendEventHandler);