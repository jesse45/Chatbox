import ConnectyCube from 'connectycube/dist/connectycube.min.js';

class ChatService {
    //static isConnected = ConnectyCube.chat.isConnected;
    //listeners
    setUpListeners() {
        ConnectyCube.chat.onDisconnectedListener = this.onDisconnectedListener.bind(this);
        ConnectyCube.chat.onReconnectListener = this.onReconnectListener.bind(this);
    }

    onDisconnectedListener() {
        //do something
    }

    onReconnectListener() {
        //do something
    }

    async createDialog() {
        const params = {
            type: 3,
            occupants_id: 4114910
        };

        ConnectyCube.chat.dialog
            .create(params)
            .then((dialog) => { console.log(dialog) })
            .catch((error) => { console.log(error) });
    }

    async disconnect(params) {
        ConnectyCube.chat.disconnect();
    }
}

const chatService = new ChatService();

export default chatService;