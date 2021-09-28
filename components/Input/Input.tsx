import cn from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input ref={ref} className={cn(styles.input, {
                [styles.error]: error
            })} {...props} />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});