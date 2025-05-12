import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Olov',
	description: 'Do‘konlaringizni reklama qiling',
	icons: {
		icon: '/favicon.ico'
	},
	viewport: 'width=device-width, initial-scale=1',
	verification: {
		google: ['7Y7F3yoq29oVJycbzyi4J59HWp1O_EqQMoMROgcBjww', '_LsNwGbKq9ko4qiiO6lEA11hkeBog6WRV1WnI_BhWII']
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
			<body>{children}</body>
		</html>
	)
}
