import { CSSProperties, PropsWithChildren, FC, MouseEventHandler } from 'react'

import styles from "./Button.module.css"


interface ButtonProps extends PropsWithChildren {
    type?: string;
    id?: string,
    className?: string,
    style?: CSSProperties,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Button: FC<ButtonProps> = ({
    children,
    type,
    onClick = undefined,
    id = "",
    className = "",
    style = {},
}) => {


    const combinedClassName = `${styles['button-default']} ${className}`;

    return (
        <>
            <button id={id} className={combinedClassName} style={style} onClick={onClick}>
                {children}
            </button>
        </>

    )
}

export { Button };

