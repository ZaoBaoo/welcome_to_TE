// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { PureComponent, memo, Component } from "react";

const checkProps = (propsPrev, propsNew) => {
    const { user: userPrev } = propsPrev;
    const { user: userNew } = propsNew;

    if (userPrev.age === userNew.age && userPrev.name === userNew.name) {
        return true;
    }
    return false;
};

export const FirstComponent = memo(({ name, age }: IUser) => {
    console.log("FirstComponent has been updated");

    return (
        <div>
            my name is {name}, my age is {age}
        </div>
    );
});

export const SecondComponent = memo(({ user: { name, age } }: IProps) => {
    console.log("SecondComponent has been updated");

    return (
        <div>
            my name is {name}, my age is {age}
        </div>
    );
}, checkProps);

export class ThirdComponent extends PureComponent<IUser> {
    render() {
        console.log("ThirdComponent has been updated");

        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

export class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps) {
        const {
            user: { age, name }
        } = nextProps;

        if (age === this.props.user.age && name === this.props.user.name) {
            return false;
        }
        return true;
    }

    render() {
        console.log("FourthComponent has been updated");

        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        );
    }
}
