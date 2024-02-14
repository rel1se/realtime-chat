import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div className="background">
            <PrettyChatWindow
                projectId="cac20680-6cff-4f36-8adc-4221446c0259"
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
};

export default ChatsPage