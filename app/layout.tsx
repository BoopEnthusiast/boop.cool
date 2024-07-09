import './global.css'


export const metadata = {
    title: {
      template: '%s | Boop\'s kool I swear',
      default: 'Be kool, be Boop',
    },
    description: {
        template: '%s - Held on Boop\'s coolest domain',
        default: 'A personal website from Boop the internet user, welcome to my coolest domain.',
    },
    generator: 'Next.js',
    applicationName: 'Boop\'s Kewl site',
    keywords: ['Epic', 'Cool', 'Boop', 'Gamer'],
    authors: [{ name: 'Boop', url: 'https://boop.website' }],
    creator: 'Boop',
    publisher: 'Boop',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
