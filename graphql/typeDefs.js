const { gql } = require('apollo-server');

module.exports = gql`
type Message {
    text: String
    createdAt: String
    createdBy: String
}

input MessageInput {
    text: String
    username: String
}

type Query {
    message(id: ID!): Message
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
}
`