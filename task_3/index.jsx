import { useState, Fragment, memo } from "react";

import { IProps } from "./interface";

// memoized component
const ChildComponent = memo(({ user: { name, age } }: IProps) => {
    console.log("ChildComponent has been updated. Memoization is not working.");

    return (
        <div>
            user name: {name}, user age: {age || "unknown"}
        </div>
    );
});

export const MainComponent = ({ user }: IProps) => {
    const [state, setState] = useState<boolean>(false); // change state for component force updating

    return (
        <Fragment>
            <button onClick={() => setState(!state)} className="btn btn-info">
                MainComponent force updating
            </button>
            <ChildComponent user={user} />
        </Fragment>
    );
};

MainComponent.defaultProps = {
    user: { name: "unknown", age: null }
};
