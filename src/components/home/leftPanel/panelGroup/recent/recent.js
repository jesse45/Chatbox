import React from 'react'
import { User, Img, AvatarContainer } from './recent.elements';

function Recent() {



    return (
        <User>
            <AvatarContainer>
                <Img src={require("../../../../../assets/img/Bruce_Wayne.webp")} />
            </AvatarContainer>
            <div>
                <p>Bruce Wayne</p>
            </div>
        </User>
    )
}

export default Recent;
