import React from 'react';
import {Card, Elevation, Icon} from "@blueprintjs/core";

const iconColor = '#C1CFD1';

const Signature = (<p
    style={{textAlign: 'right'}}>

    <br/> -Ron Swanson
</p>);

const MessageBox = (props) => (
    <div className={'message-box'}>

        <Card interactive elevation={Elevation.THREE} onClick={props.onCardClick}>
            <div className={props.class}>
                {props.quote}
                {Signature}
            </div>

        </Card>

        <div className={'legend'}>
            <Icon
                iconSize={16}
                icon={props.quotesStatus ? 'play' : 'stop'}
                color={iconColor}
            />

            {/*I am considering adding this text field*/}
            {/*<p>*/}
                {/*{props.quotesStatus ?'play': 'stop'}*/}
            {/*</p>*/}
        </div>

    </div>

);


export default MessageBox;