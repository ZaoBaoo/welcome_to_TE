import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = () => console.log('hi from MainComponent'); // function to make logs from MainComponent

    const makeLogMemo = useCallback(makeLog, []);

    return (
        <Fragment>
            <ChildComponent makeLog={makeLogMemo} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
