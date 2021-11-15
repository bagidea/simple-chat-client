import { Manager, Socket } from "socket.io-client";
import { ClientMap } from "./protos/client_pb";
import { RoomMap } from "./protos/room_pb"
import { CreateRoom, JoinRoom, Login, SendMessage, Standard } from "./protos/contract_pb";
import { Global } from "./protos/global_pb";
import { Player } from "./protos/player_pb";
import { JoinAndLeaveRoom, ReceiveMessage, RoomObject } from "./protos/server_pb";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface LoginPanel {
    username_input: MutableRefObject<HTMLInputElement>,
    password_input: MutableRefObject<HTMLInputElement>,
    login_btn: MutableRefObject<HTMLButtonElement>,
    page: MutableRefObject<HTMLDivElement>
}

export interface LobbyPanel {
    room_id_input: MutableRefObject<HTMLInputElement>,
    join_btn: MutableRefObject<HTMLButtonElement>,
    create_btn: MutableRefObject<HTMLButtonElement>,
    is_public: MutableRefObject<HTMLInputElement>,
    matching_btn: MutableRefObject<HTMLButtonElement>,
    server_btn: MutableRefObject<SVGSVGElement>,
    users_btn: MutableRefObject<SVGSVGElement>,
    rooms_btn: MutableRefObject<SVGSVGElement>,
    page: MutableRefObject<HTMLDivElement>
}

export interface Msg {
    id: number,
    name: string,
    msg: string
}

export interface ChatPanel {
    msg_input: MutableRefObject<HTMLInputElement>,
    send_btn: MutableRefObject<HTMLButtonElement>,
    leave_btn: MutableRefObject<HTMLButtonElement>,
    setMsgs: Dispatch<SetStateAction<Msg[]>>,
    page: MutableRefObject<HTMLDivElement>
}

export interface ModalPanel {
    setHeader: Dispatch<SetStateAction<string>>,
    setContent: Dispatch<SetStateAction<string>>,
    open: VoidFunction
}

export class Network {
    manager: Manager
    socket: Socket
    login_panel: LoginPanel
    lobby_panel: LobbyPanel
    chat_panel: ChatPanel
    modalPanel: ModalPanel

    msgs: Msg[] = []

    constructor(login_panel: LoginPanel, lobby_panel: LobbyPanel, chat_panel: ChatPanel, modalPanel: ModalPanel) {
        this.login_panel = login_panel
        this.lobby_panel = lobby_panel
        this.chat_panel = chat_panel
        this.modalPanel = modalPanel

        this.init()
        this.event()
        this.action()
    }

    init() {
        this.manager = new Manager("ws://localhost:6336")
        this.socket = this.manager.socket("/")
    }

    event() {
        /*this.socket.on('connect', () => {
            console.log("Connected.")
        })*/

        this.socket.on('login-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    this.login_panel.page.current.style.display = "none"
                    this.lobby_panel.page.current.style.display = "flex"
                    this.chat_panel.page.current.style.display = "none"

                    console.log(e.getText())
                    console.log(Player.deserializeBinary(e.getData_asU8()).toObject())
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Login "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('get-all-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    const result: string = JSON.stringify(Global.deserializeBinary(e.getData_asU8()).toObject(), null, 2)
                    console.log(e.getText())
                    console.log(result)

                    this.modalPanel.setHeader("Server")
                    this.modalPanel.setContent(result)
                    this.modalPanel.open()
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Get All "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('get-users-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    const result: string = JSON.stringify(ClientMap.deserializeBinary(e.getData_asU8()).toObject(), null, 2)
                    console.log(e.getText())
                    console.log(result)

                    this.modalPanel.setHeader("Users")
                    this.modalPanel.setContent(result)
                    this.modalPanel.open()
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Get Users "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('get-rooms-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    const result: string = JSON.stringify(RoomMap.deserializeBinary(e.getData_asU8()).toObject(), null, 2)
                    console.log(e.getText())
                    console.log(result)

                    this.modalPanel.setHeader("Rooms")
                    this.modalPanel.setContent(result)
                    this.modalPanel.open()
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Get Rooms "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('create-room-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    this.msgs = []
                    this.chat_panel.setMsgs([...this.msgs])

                    this.login_panel.page.current.style.display = "none"
                    this.lobby_panel.page.current.style.display = "none"
                    this.chat_panel.page.current.style.display = "flex"

                    console.log(e.getText())
                    console.log(RoomObject.deserializeBinary(e.getData_asU8()).toObject())
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Create Room "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('join-room-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    this.msgs = []
                    this.chat_panel.setMsgs([...this.msgs])

                    this.login_panel.page.current.style.display = "none"
                    this.lobby_panel.page.current.style.display = "none"
                    this.chat_panel.page.current.style.display = "flex"

                    console.log(e.getText())
                    console.log(RoomObject.deserializeBinary(e.getData_asU8()).toObject())
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Join Room "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('leave-room-response', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    this.login_panel.page.current.style.display = "none"
                    this.lobby_panel.page.current.style.display = "flex"
                    this.chat_panel.page.current.style.display = "none"

                    console.log(e.getText())
                    console.log(RoomObject.deserializeBinary(e.getData_asU8()).toObject())
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Leave Room "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })

        this.socket.on('player-join-room', (res: Uint8Array) => {
            try {
                const e: JoinAndLeaveRoom = JoinAndLeaveRoom.deserializeBinary(res)

                this.msgs.push({
                    id: this.msgs.length,
                    name: "Server",
                    msg: e.getPlayer().getName()+" has join room."
                })
                this.chat_panel.setMsgs([...this.msgs])

                console.log(e.getPlayer().getName()+" has join room.")
                console.log(e.toObject())
            } catch(e) { console.log(e) }
        })

        this.socket.on('player-leave-room', (res: Uint8Array) => {
            try {
                const e: JoinAndLeaveRoom = JoinAndLeaveRoom.deserializeBinary(res)

                this.msgs.push({
                    id: this.msgs.length,
                    name: "Server",
                    msg: e.getPlayer().getName()+" has leave room."
                })
                this.chat_panel.setMsgs([...this.msgs])

                console.log(e.getPlayer().getName()+" has leave room.")
                console.log(e.toObject())
            } catch(e) { console.log(e) }
        })

        this.socket.on('receive-message', (res: Uint8Array) => {
            try {
                const e: Standard = Standard.deserializeBinary(res)

                if(e.getSuccess()) {
                    const receiveMsg: ReceiveMessage = ReceiveMessage.deserializeBinary(e.getData_asU8())
                    const player: Player = receiveMsg.getPlayer()
                    const msg: string = receiveMsg.getMsg()

                    this.msgs.push({
                        id: this.msgs.length,
                        name: player.getName(),
                        msg: msg
                    })
                    this.chat_panel.setMsgs([...this.msgs])

                    console.log(e.getText())
                    console.log(ReceiveMessage.deserializeBinary(e.getData_asU8()).toObject())
                } else {
                    console.log(e.getText())

                    this.modalPanel.setHeader("Receive message "+(e.getSuccess()?"success":"failed"))
                    this.modalPanel.setContent(e.getText())
                    this.modalPanel.open()
                }
            } catch(e) { console.log(e) }
        })
    }

    action() {
        // Login
        this.login_panel.login_btn.current.addEventListener('click', () => {
            const username: string = this.login_panel.username_input.current.value
            const password: string = this.login_panel.password_input.current.value
            if(username == "" || password == "") return

            const e: Login = new Login()
            e.setUsername(username)
            e.setPassword(password)

            this.socket.emit('login', e.serializeBinary())

            //this.login_panel.username_input.current.value = ""
            this.login_panel.password_input.current.value = ""
        })

        // Get All
        this.lobby_panel.server_btn.current.addEventListener('click', () => {
            this.socket.emit('get-all', null)
        })

        // Get Users
        this.lobby_panel.users_btn.current.addEventListener('click', () => {
            this.socket.emit('get-users', null)
        })

        // Get Rooms
        this.lobby_panel.rooms_btn.current.addEventListener('click', () => {
            this.socket.emit('get-rooms', null)
        })

        // Is Public Change
        /*this.lobby_panel.is_public.current.addEventListener('change', () => {
            console.log(this.lobby_panel.is_public.current.checked)
        })*/

        // Join Room
        this.lobby_panel.join_btn.current.addEventListener('click', () => {
            const roomId: string = this.lobby_panel.room_id_input.current.value
            if(roomId == "") return

            const e: JoinRoom = new JoinRoom()
            e.setRoomid(roomId)

            this.socket.emit('join-room', e.serializeBinary())

            //this.lobby_panel.room_id_input.current.value = ""
        })

        // Create Room
        this.lobby_panel.create_btn.current.addEventListener('click', () => {
            const e: CreateRoom = new CreateRoom()
            e.setNum(4)
            e.setStatus((this.lobby_panel.is_public.current.checked)?"public":"private")
            this.socket.emit('create-room', e.serializeBinary())
        })

        // Matching Room
        this.lobby_panel.matching_btn.current.addEventListener('click', () => {
            this.socket.emit('matching-room', null)
        })

        // Send Message
        this.chat_panel.send_btn.current.addEventListener('click', () => {
            const msg: string = this.chat_panel.msg_input.current.value
            if(msg == "") return

            const e: SendMessage = new SendMessage()
            e.setMsg(msg)
            this.socket.emit('send-message', e.serializeBinary())

            this.chat_panel.msg_input.current.value = ""
        })

        // Leave Room
        this.chat_panel.leave_btn.current.addEventListener('click', () => {
            this.socket.emit('leave-room', null)
        })
    }
}