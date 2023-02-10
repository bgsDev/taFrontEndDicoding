import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const dt = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${dt.title} is on cinema!`,
      options: {
        body: dt.overview,
        image: `${CONFIG.BASE_IMAGE_URL + dt.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;
