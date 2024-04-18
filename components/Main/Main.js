import * as SELECTORS from '../../constants/selectors';
import { cn } from '../../libs/cn';
import styles from './Main.module.css';

export default function Main({ children, className, ...props }) {
  return (
    <main
      id={SELECTORS.MAIN_CONTENT_ID}
      tabIndex={-1}
      className={cn('component', className)}
      {...props}
    >
      {children}
    </main>
  );
}
