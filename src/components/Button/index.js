import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    disabled= false,
    primary = false,
    outline = false,
    text= false,
    rounded=false,
    small = false,
    large = false,
    to,
    href,
    onClick,
    children,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }; //props nội bộ

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //Remove events lisner when button is disabled
    if(disabled){
        Object.keys(props).forEach((key)=>{
            if(key.startsWith === 'on' && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        disabled,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;
