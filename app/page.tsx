'use client'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'

const LandingPage = () => {
	const [visitorCount, setVisitorCount] = useState(0)

	useEffect(() => {
		const storedCount = localStorage.getItem('visitorCount')
		if (storedCount) {
			setVisitorCount(parseInt(storedCount, 10))
		} else {
			localStorage.setItem('visitorCount', '1')
			setVisitorCount(1)
		}

		console.log(`Saytga kirgan foydalanuvchilar soni: ${storedCount || 1}`)
	}, [])

	useEffect(() => {
		if (visitorCount > 0) {
			localStorage.setItem('visitorCount', visitorCount.toString())
			console.log(`Saytga kirgan foydalanuvchilar soni: ${visitorCount}`)
		}
	}, [visitorCount])

	return (
		<div className='font-sans bg-gray-900 text-white'>
			import Head from 'next/head'
			<Head>
				<meta name='google-site-verification' content='7Y7F3yoq29oVJycbzyi4J59HWp1O_EqQMoMROgcBjww' />
				<title>Olov Platforma</title>
			</Head>
			<div className='min-h-screen flex flex-col'>
				{/* Header */}
				<header className='py-8'>
					<div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
						<h1 className='text-4xl md:text-5xl font-bold'>Olov</h1>
					</div>
				</header>

				{/* Main Section */}
				<main className='flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6 py-12 gap-8'>
					{/* Left Content */}
					<div className='w-full lg:w-1/2 text-center sm:text-left'>
						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight'>Do‘konlaringizni reklama qiling</h2>
						<p className='text-lg sm:text-lg mb-6'>Olov - bu do‘konlarni reklama qilish uchun zamonaviy platforma. Foydalanuvchilarni jalb qilish uchun eng yaxshi joyni toping va sotuvlaringizni oshiring!</p>
						<div className='space-y-4'>
							<Input type='text' placeholder='Ismingiz va familiyangiz' className='w-full p-6 rounded-md bg-white text-gray-800' />
							<Input type='text' placeholder='+998 XX XXX XX XX' className='w-full p-6 rounded-md bg-white text-gray-800' />
							<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8'>
								<Link href='#' className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold w-full sm:w-auto'>
									Reklama boshlash
								</Link>
								<Link href='+998 77 001 59 99' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold w-full sm:w-auto'>
									Biz bilan bog‘laning
								</Link>
							</div>
						</div>
						<p className='mt-4 text-sm text-gray-200'>Tugmani bosish orqali siz bizning shartlarimizga rozilik bildirasiz.</p>
					</div>

					{/* Right Content */}
					<div className='w-full lg:w-1/2'>
						<div className='bg-gray-800 text-white p-6 rounded-md shadow-lg h-auto lg:h-[350px]'>
							<h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8'>Platforma haqida</h3>
							<p className='text-base sm:text-lg md:text-xl lg:text-xl font-semibold leading-relaxed'>
								Olov - do‘konlar uchun reklama joylashtirishning innovatsion platformasi. Mahsulotlaringizni kengroq auditoriyaga tanishtirishni va mijozlar oqimini ko‘paytirishni xohlaysizmi? Olov platformasi yordamida buni oson amalga oshiring!
							</p>
							<p className='text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4'>Platformamiz orqali reklama joylashtirish tez va qulay.</p>
						</div>
					</div>
				</main>
			</div>
			{/* Contact Section */}
			<section className='py-12 px-6 gap-4 md:gap-6 h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-between'>
				{/* Left Section - Contact Form */}
				<div className='max-w-4xl mx-auto text-center md:text-left'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>Biz bilan bog‘laning</h2>
					<p className='text-lg sm:text-xl leading-relaxed mb-8'>Do‘koningizni reklama qilish yoki qo‘shimcha ma’lumot olish uchun bizga murojaat qiling.</p>
					<form className='grid gap-4 md:gap-6'>
						<Input type='text' placeholder='Ismingiz' className='w-full p-6 bg-gray-700 text-white rounded-md' />
						<Input type='email' placeholder='Email manzilingiz' className='w-full p-6 bg-gray-700 text-white rounded-md' />
						<Textarea placeholder='Xabaringizni yozing' className='w-full p-6 bg-gray-700 text-white rounded-md' />
						<Button type='submit' className='py-6 px-6 bg-red-600 hover:bg-red-700 rounded-md text-white font-bold uppercase'>
							Xabar yuboring
						</Button>
					</form>
				</div>

				{/* Android and iOS Download Section */}
				<div className='flex flex-col md:flex-row justify-center gap-4 md:gap-6'>
					<Link href={'https://play.google.com/store/'}>
						<p className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md flex items-center space-x-4'>
							<FaGooglePlay className='text-2xl' />
							<span>Google Play</span>
						</p>
					</Link>
					<Link href={'https://www.apple.com/app-store/'}>
						<p className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md flex items-center space-x-4'>
							<FaApple className='text-2xl' />
							<span>App Store</span>
						</p>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default LandingPage
