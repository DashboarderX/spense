import { useState } from 'react'
import clsx from 'clsx'
import { HiMenu, HiCheckCircle } from 'react-icons/hi'
import Image from 'next/image'

const Index = () => {
  const [menu, setMenu] = useState(false)
  return (
    <main className="w-full">
      {/* topper */}
      <div className="px-6 py-4 text-xs text-center text-white bg-gray-900">
        🌝 To celebrate Spence's launch, we'll waiving for the entire month of
        April. <span className>You'll be receiving 100% of the earnings</span>
        🌝.
      </div>
      {/* Navbar */}
      <nav className="sticky inset-x-0 top-0 z-10 items-center justify-between bg-white md:py-3 md:shadow md:flex md:px-16 lg:px-28 xl:px-36">
        <div className="flex items-center relative z-[9] justify-between w-full px-6 py-4 shadow md:py-0 md:shadow-none md:px-0 md:w-2/6">
          <h1 className="text-xl font-black text-black">spense.</h1>
          <button
            type="button"
            className={clsx('md:hidden rounded-full p-2', {
              'bg-gray-200 shadow-md': menu
            })}
            onClick={() => setMenu(!menu)}
          >
            <HiMenu
              className={clsx(
                'h-6 w-auto transform transition-all duration-300',
                {}
              )}
            />
          </button>
        </div>
        <div
          className={clsx(
            'items-center justify-between inset-x-0 w-full absolute z-[5] md:relative py-2 md:py-0 overflow-hidden text-gray-800 transform transition-all shadow-2xl rounded-b-2xl md:rounded-b-none md:shadow-none rounded bg-white md:w-4/6 md:flex',
            { '-translate-x-full md:translate-x-0': !menu }
          )}
        >
          <div className="flex flex-col items-start px-6 md:flex-row md:space-x-5 md:px-0">
            <button className="w-full p-1 font-semibold text-left transition-colors rounded hover:bg-gray-100">
              Business
            </button>
            <button className="w-full p-1 font-semibold text-left transition-colors rounded hover:bg-gray-100">
              Pricing
            </button>
            <button className="w-full p-1 font-semibold text-left transition-colors rounded hover:bg-gray-100">
              Features
            </button>
          </div>
          <div className="flex px-6 py-2 space-x-5 md:px-0">
            <button className="p-2 font-semibold">Login</button>
            <button className="p-2 font-semibold text-white bg-gray-800 rounded">
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section
        className={clsx(
          'px-8 md:px-16 lg:px-28 mt-10 xl:px-36 flex justify-around items-center flex-col-reverse md:flex-row'
        )}
      >
        <div className="w-full md:max-w-[50%] mt-8 md:mt-0">
          <h1 className="text-4xl font-black">
            Share your unfiltered thoughts. Get paid.
          </h1>
          <p className="font-medium">
            Spence is an open platform for individuals to share their unfiltered
            thoughts. Discuss the topics you love and get paid for doing{' '}
            <i>just</i> that.
          </p>
          <ul className="mt-4">
            {[
              'Receive 99% of the earnings',
              'Get paid via Debit Card, ACH or Pay Pal',
              'Withdraw your earnings anytime'
            ].map((point, i) => (
              <li key={i + 1} className="flex items-center font-medium">
                <HiCheckCircle className="w-auto h-5 mr-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-start py-8 space-x-4">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="johndoe76@gmail.com"
              className="px-3 py-1.5 border border-gray-500 rounded focus:outline-none text-gray-500 focus:ring-gray-500 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-white bg-gray-900 rounded"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full md:max-w-[35%]">
          <Image
            src="/img/heroimg.png"
            alt="Hero Image"
            width={1701}
            height={2076}
            layout="intrinsic"
          />
        </div>
      </section>
    </main>
  )
}

export default Index
