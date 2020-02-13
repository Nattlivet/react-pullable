import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture'

import './Pully.css';

export interface PullyProps {
    className?: string,
    disabled?: boolean,

    onRefresh: any,
    distThreshold?: number,
    resistance?: number,
    spinner?: any
};

const Pully: React.FunctionComponent<PullyProps> = (props) => {
    const [state, setState] = useState({
        status: 'ready',
        height: 0
    });
    const draggable = useDrag(async ({ down, distance }) => {
        if (state.status !== 'ready')
            return;

        if (!down || distance < props.distThreshold)
            return;

        setState({ ...state, status: 'refreshing' });
        await props.onRefresh();
        setState({ ...state, status: 'ready' });
    })

    return (
        <div className="Pully-Wrapper">
            <div className={props.className} style={{
                height: state.status !== 'ready' ? '24px' : '0px',
                marginBottom: state.status !== 'ready' ? '1rem' : '0px',
                opacity: state.status !== 'ready' ? '1' : '0',
                animation: state.status !== 'ready' ? 'none' : undefined,
            }}>
                {props.spinner}
            </div>
            <div className={`${props.className}-Content`} {...draggable()}>
                {props.children}
            </div>
        </div>
    );
};

Pully.defaultProps = {
    disabled: false,
    className: 'Pully',

    distThreshold: 72,
    resistance: 2.5,
    spinner: (
        <svg stroke="#dfdfdf" height="24px" width="24px" viewBox="0 0 24 24" strokeWidth="1.5">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
    )
} as Partial<PullyProps>;

export default Pully;
