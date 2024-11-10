import React from "react";
import { TypeAnimation } from "react-type-animation";
import Title from '../../assets/Title.png'
import './Home.css'

export function Home({ onSceneChange }) {
    return (
        <div className="Home">
            <img src={Title}  />
            {/* <h1>Apathetic Desolation</h1> */}
            <TypeAnimation
                className="type-animation-home"
                sequence={[
                    'A DAƦK AND PSYCHOLOGꞮCAL ꞮNTEƦACTꞮVE ADVENTUƦE. ʀᴇᴍᴇᴍʙᴇʀ ᴛʜɪꜱ ɪꜱ ᴊᴜꜱᴛ ᴀ ɢᴀᴍᴇ, ɴᴏᴛʜɪɴɢ ʏᴏᴜ ꜱᴇᴇ ʜᴇʀᴇ ɪꜱ ʀ̶͉͔̅̍Ι̜̝ᴇ̸̢͖̜̪̯̥̞̇̋ᴀ̵̱̥͕̤̘̺̝̣̯͚̆͋ʟ̸̼͈͛̇̏͋̓͛͆̇͊͠, ɴᴏɴᴇ ᴏꜰ ᴛʜɪꜱ ɪꜱ ʀᴇᴀʟ, ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ʀ̶͉͔̅̍Ι̜̝ᴇ̸̢͖̜̪̯̥̞̇̋ᴀ̵̱̥͕̤̘̺̝̣̯͚̆͋ʟ̸̼͈͛̇̏͋̓͛͆̇͊͠, ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ʀ̶͉͔̅̍Ι̜̝ᴇ̸̢͖̜̪̯̥̞̇̋ᴀ̵̱̥͕̤̘̺̝̣̯͚̆͋ʟ̸̼͈͛̇̏͋̓͛͆̇͊͠',
                    500
                ]}
                speed={20}
                style={{ fontSize: "24px", fontWeight: "bold" }}
                repeat={false}
                cursor={false}
            />
            <button onClick={onSceneChange}>
                Start
            </button>
        </div>
    );
}