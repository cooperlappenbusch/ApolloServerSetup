const Message = require('../../models/Message');

module.exports = {
    Mutation: {
        async createMessage(_, {messageInput: {text, username} }) {
            const newMessage = new Message({
                text: text,
                createdBy: username,
                createdAt: new Date().toISOString()
            });

            const res = await newMessage.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            };
        }
    },
    Query: {
        message: (_, {ID}) => Message.findById(ID)
    }
}