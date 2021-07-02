import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText('-Mdc3rI3NM8re-t9trqH');
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code"/>
            </div>
            <span>Sala -Mdc3rI3NM8re-t9trqH</span>
        </button>
    )
}