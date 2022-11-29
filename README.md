# Social-Network-API
M18C

A MongoDB API

## Demo of Application

[Video Demo](https://app.castify.com/view/080de5be-e9ae-4024-962a-50f2c33203f6)

## Required Installation

[Mongoose](https://www.npmjs.com/package/mongoose)

[Express.js](https://www.npmjs.com/package/express)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list