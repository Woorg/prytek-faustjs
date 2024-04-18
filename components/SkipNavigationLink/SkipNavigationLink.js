import * as SELECTORS from '../../constants/selectors';
import { cn } from '../../libs/cn';
import styles from './SkipNavigationLink.module.css';
cn

export default function SkipNavigationLink() {
  return (
    <a
      className={cn('component', 'sr-only')}
      href={`#${SELECTORS.MAIN_CONTENT_ID}`}
    >
      Skip To Main Content
    </a>
  );
}
