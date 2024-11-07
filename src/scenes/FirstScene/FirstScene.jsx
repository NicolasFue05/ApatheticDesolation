import React from "react";
import { notification } from "../../Constants/CurrentConstants.jsx";
import { Notification } from '../../components/Notification/Notification.jsx'
import './FirstScene.css'

function FirstScene() {


    return (
        <div className="FirstScene">
            <Notification
                className="notification-1"
                Username={notification[0].username}
                Message={notification[0].message}
            />
        </div>
    )
}

export default FirstScene;