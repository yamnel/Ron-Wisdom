import React from 'react';
import {Card, Elevation, Icon} from "@blueprintjs/core";

const iconColor = '#545b5d';

const Signature = (<p
    style={{textAlign: 'right'}}>
  <br/> -Ron Swanson
</p>);

const MessageBox = (props) => (
    <div className={'message-box'}>

        <Card interactive className={'custom-card'} elevation={Elevation.FOUR} onClick={props.onCardClick}>
            <div className={props.class}>
                <p>"{props.quote}"</p>
                <h6>{Signature}</h6>
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