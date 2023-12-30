import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
@WebSocketGateway()
export class AppGateway {
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    console.log(payload);
    client.emit('replyMessage', {
      message: payload,
      replyMessage: `reply message from worker with process.pid:
       ${process.pid}`,
    });
  }
}