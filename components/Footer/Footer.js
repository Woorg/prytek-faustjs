import { Container, NavigationMenu } from '../../components';
import { cn } from '../../libs/cn';
import styles from './Footer.module.css';

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn('component')}>
      <Container>
        <NavigationMenu menuItems={menuItems} />
        <p className={cn('copyright')}>{`${title} © ${year}. Powered by WordPress.`}</p>
      </Container>
    </footer>
  );
}
