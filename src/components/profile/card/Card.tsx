import clsx from 'clsx';
import styles from './Card.module.css';
import { FC, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
    className?: string
}

export const Card: FC<CardProps> = (props) => {
    const  {children, className} = props;
    return (
        <div className={clsx(styles['card'], className)}>
            {children}
        </div>
    );
}

