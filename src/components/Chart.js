import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} width={100} height={100}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
        </div>
    );
}