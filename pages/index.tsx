import { Button } from "@chakra-ui/button"
import CSSReset from "@chakra-ui/css-reset"
import { useDisclosure } from "@chakra-ui/hooks"
import { DragHandleIcon, SunIcon, ViewIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { Checkbox } from "@chakra-ui/checkbox"
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { ModalFooter } from "@chakra-ui/react"
import { ThemeProvider } from "@chakra-ui/system"
import theme from "@chakra-ui/theme"

import { MutableRefObject, useEffect, useRef, useState } from "react"
import { ChatPanel, LobbyPanel, LoginPanel, ModalPanel, Msg, Network } from "../networks/socket_client"

export default () => {
    const username_input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const password_input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const login_btn: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const login_content: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const room_id_input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const join_btn: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const create_btn: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const is_public: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const matching_btn: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const server_btn: MutableRefObject<SVGSVGElement> = useRef<SVGSVGElement>(null)
    const users_btn: MutableRefObject<SVGSVGElement> = useRef<SVGSVGElement>(null)
    const rooms_btn: MutableRefObject<SVGSVGElement> = useRef<SVGSVGElement>(null)
    const lobby_content: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const msg_input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const send_btn: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const leave_btn: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
    const chat_content: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const [chatMsgs, setChatMsgs] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ headerModal, setHeaderModal ] = useState("Users")
    const [ modalContent, setModalContent ] = useState("")

    useEffect(() => {
        //login_content.current.style.display = "none"
        lobby_content.current.style.display = "none"
        chat_content.current.style.display = "none"

        const login_panel: LoginPanel = {
            username_input: username_input,
            password_input: password_input,
            login_btn: login_btn,
            page: login_content
        }

        const lobby_panel: LobbyPanel = {
            room_id_input: room_id_input,
            join_btn: join_btn,
            create_btn: create_btn,
            is_public: is_public,
            matching_btn: matching_btn,
            server_btn: server_btn,
            users_btn: users_btn,
            rooms_btn: rooms_btn,
            page: lobby_content
        }

        const chat_panel: ChatPanel = {
            msg_input: msg_input,
            send_btn: send_btn,
            leave_btn: leave_btn,
            setMsgs: setChatMsgs,
            page: chat_content
        }

        const modalPanel: ModalPanel = {
            setHeader: setHeaderModal,
            setContent: setModalContent,
            open: onOpen
        }

        new Network(login_panel, lobby_panel, chat_panel, modalPanel)
    }, [])

    return (
        <ThemeProvider theme={ theme }>
            <CSSReset />

            <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="grey" ref={ login_content }>

                <Flex direction="column" backgroundColor="gray.100" padding={ 12 } rounded={ 6 }>
                    <Stack>
                        <Heading maxBlockSize={ 6 } marginBottom={ 8 } textAlign="center">Game Demo</Heading>
                        <Input placeholder="Username" ref={ username_input } />
                        <Input placeholder="Password" ref={ password_input } type="password" />
                        <Button colorScheme="teal" ref={ login_btn }>Login</Button>
                    </Stack>
                </Flex>

            </Flex>

            <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="#aaaaff" ref={ lobby_content }>
                <Flex direction="column" backgroundColor="gray.100" padding={ 12 } rounded={ 6 }>
                    <Stack>
                        <Heading maxBlockSize={ 6 } marginBottom={ 8 } textAlign="center">Lobby</Heading>
                        <Input placeholder="Room ID" ref={ room_id_input } marginBottom={ 8 } />
                        <Button colorScheme="teal" ref={ join_btn }>Join Room</Button>
                        <Button colorScheme="facebook" ref={ create_btn }>Create Room</Button>
                        <Checkbox defaultChecked ref={ is_public }>Create to Public</Checkbox>
                        <Button colorScheme="red" ref={ matching_btn }>Quick Play</Button>

                        <Flex justifyContent="center" alignItems="center" padding={ 2 }>
                            <SunIcon width={ 8 } height={ 8 } color="gray" margin={ 3 } cursor="pointer" ref={ server_btn } />
                            <ViewIcon width={ 8 } height={ 8 } color="gray" margin={ 3 } cursor="pointer" ref={ users_btn } />
                            <DragHandleIcon width={ 8 } height={ 8 } color="gray" margin={ 3 } cursor="pointer" ref={ rooms_btn } />
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>

            <Flex height="100vh" justifyContent="center" ref={ chat_content }>
                <Box display="flex" position="fixed" width="100vw" height={ 55 } backgroundColor="white" padding={ 2 }>
                    <Input placeholder="Enter your Message" ref={ msg_input } />
                    <Button colorScheme="telegram" ref={ send_btn }>Send</Button>
                    <Button colorScheme="red" ref={ leave_btn }>Leave</Button>
                </Box>

                <Box display="inline-block" width="100vw" height="100vh" padding={ 8 } marginTop={ 10 }>
                    {
                        chatMsgs.map((value: Msg) => (
                            <Flex key={ value.id }>
                                <Text fontWeight={ 500 } fontSize={ 24 } marginRight={ 5 }>{ value.name } : </Text>
                                <Text fontSize={ 22 }>{ value.msg }</Text>
                            </Flex>
                        ))
                    }
                </Box>
            </Flex>

            <Modal isOpen={ isOpen } onClose={ onClose } size="xl" scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent> 

                    <ModalHeader>{ headerModal }</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody width="100" id="contentsad">
                        { modalContent }
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={ onClose }>Close</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>

        </ThemeProvider>
    )
}