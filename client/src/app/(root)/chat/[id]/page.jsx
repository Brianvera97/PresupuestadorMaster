'use client'
import { getChatById } from "@/app/api/route";
import ChatScope from "@/components/chat/ChatScope"
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react"


const ChatPage = () => {

    const [chat, setChat] = useState({});
    const { id } = useParams();

    const handleGetChat = async () => {
        try {
            const response = await getChatById(id);
            console.log(response);
            setChat(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetChat();
    }, [])

    return (
        <Fragment>
            <ChatScope {...chat} />
        </Fragment>
    )
}

export default ChatPage;