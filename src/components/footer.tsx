import Link from 'next/link';
import { Globe, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 font-headline font-bold text-lg mb-4 md:mb-0">
            <Globe className="h-7 w-7 text-primary" />
            <span>Wanderlust Wonders</span>
          </div>
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wanderlust Wonders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
