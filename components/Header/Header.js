import { useState } from 'react';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.css';
import { cn } from '../../libs/cn';


export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className={cn('component')}>

      <SkipNavigationLink />
        <Container>
          <div className={cn('navbar')}>
            <div className={cn('brand')}>
              <Link href="/">
                <span className={cn('title')}>{title}</span>
              </Link>
              {description && <p className={cn('description')}>{description}</p>}
            </div>
            <button
              type="button"
              className={cn('nav-toggle')}
              onClick={() => setIsNavShown(!isNavShown)}
              aria-label="Toggle navigation"
              aria-controls={cn('primary-navigation')}
              aria-expanded={isNavShown}
            >
              ☰
            </button>
            <NavigationMenu
              className={cn('primary-navigation', isNavShown ? 'show' : undefined)}
              menuItems={menuItems}
            />
        </div>
      </Container>



    </header>
  );
}
