import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    const [state, setState] = React.useState<string>('initial state');

    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;