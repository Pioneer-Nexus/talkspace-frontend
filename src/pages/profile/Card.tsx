import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
    className?: string
}

export const Card: FC<CardProps> = (props) => {
    const  {children, className} = props;
    return (
        <div className={clsx('p-[12px] rounded-lg border-[#dedede] border-[1px] w-full', className)}>
            {children}
        </div>
    );
}

