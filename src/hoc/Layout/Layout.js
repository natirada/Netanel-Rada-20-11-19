import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Navigation from '../../components/Navigation/Navigation';

const layout = (props) => {
    return (
        <Aux>
            <Navigation />
            <main >
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;