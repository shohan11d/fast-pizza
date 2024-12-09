import Logo from './components/Logo';
import Navigation from './components/Navigation';

export const metadata = {
   title: 'The Wild Oasis',
   description: 'Welcome to paradise.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <header>
               <Logo />
            </header>
            <Navigation />
            <main>{children}</main>
            <footer>Copyright by the Wild Oassis</footer>
         </body>
      </html>
   );
}
