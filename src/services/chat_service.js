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

    async createDialog(type, occupants_id) {
        const params = {
            type: 3,
            occupants_id: [4477181]
        };

        ConnectyCube.chat.dialog
            .create(params)
            .then((dialog) => { console.log(dialog) })
            .catch((error) => { console.log(error) });
    }

    async disconnect(params) {
        ConnectyCube.chat.disconnect();
    }

    async listDialogs() {
        const filters = {};

        let chat = await ConnectyCube.chat.dialog.list(filters);

        console.log(chat);

        let chatResponse = await chat.json();
        console.log(chatResponse);

    }

    async sendChat() {
        let dialog;
        let opponentid;
        let message = null;



    }

}

const chatService = new ChatService();

export default chatService;