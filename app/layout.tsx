import './global.css'
import Head from 'next/head'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <meta property="og:locale:alternate" content="en_NZ" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:locale:alternate" content="en_GB" />
                <meta property="og:locale:alternate" content="en_AU" />
            </Head>
            <body>
                {children}
            </body>
        </html>
    );
}


export const metadata = {
    title: {
      template: '%s | Boop\'s kool I swear',
      default: 'Be kool, be Boop',
    },
    description: {
        template: '%s - Held on Boop\'s coolest domain',
        default: 'A personal website from Boop The Internet User, welcome to my coolest domain.',
    },
    generator: 'Next.js',
    applicationName: 'Boop\'s Kewl site',
    keywords: ['Boop', 'Cool', 'Personal'],
    authors: [{ name: 'Boop', url: 'https://boop.website' }],
    creator: 'Boop',
    publisher: 'Boop',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Boop',
        description: 'Boop\' coolest site B)',
        url: 'https://boop.cool',
        siteName: 'Boop',
        images: [
            {
                url: 'https://boop.website/images/logo.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
        ],
        locale: 'en',
        type: 'website',
      },
}