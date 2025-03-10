/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from 'react-scroll'
import HeaderImages from '../components/HeaderImages'
import Timeline from '../components/TimeLine'


import Gallery from '../components/Gallery'


// const image = {
//   src: 'logo_IEEE_Banaglaore_Section.png',
//   alt: 'ieee_bangalore_logo',
//   href: 'https://ieeebangalore.org/',
//   show: true,
//   padding: 'pt-6',
// }

export default function Index() {

  return (
    <>
     
      <section className="body-font m-0 text-gray-60">
        {/* <div className="bar">
          <span className="bar_content">
            All of the students register for pre-tutorial conference. Amount to be paid : 590 (Includes GST)
            <a href="https://rzp.io/l/3N4bwhvH" className="text-gray-600"> Quick Payment Link</a>
          </span>
        </div> */}
        <header>
          <div
            className="heroHeader w-full bg-cover bg-center"
            style={{ padding: '3rem' }}
          >
            <HeaderImages />
            <div className="flex  w-full items-center justify-center ">
              <div className="rounded-3xl bg-gray-800 bg-opacity-80 px-9 py-5 text-center font-extrabold ">
                <h1 className="bg bg-gradient-to-r from-yellow-200  via-amber-500 via-orange-600 via-red-600 via-amber-400 to-yellow-300 bg-clip-text text-5xl font-extrabold text-transparent">
                  WELCOME TO CSITSS-2025
                </h1>
                <p className="mt-4 text-xl text-white md:mt-0 md:text-2xl">
                  <span className="font-normal ">
                    9<sup>th</sup> International Conference on Computational
                    Systems and Information Technology for Sustainable Solutions
                  </span>
                </p>
                <p className="align-text-center text-xl text-slate-50"></p>
                <p className="align-text-center text-xl font-normal text-slate-50">
                  Organized by
                </p>
                <p className="text-align-center text-2xl text-slate-50">
                  <h4>
                    RV College of Engineering<sup className="text-lg">®</sup>
                  </h4>
                </p>

                <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-3">
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                  >
                    <span>Submit Paper</span>
                  </a>

                  <ScrollLink
                    activeClass="active"
                    className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={600}
                    delay={100}
                  >
                    <span>Timeline</span>
                  </ScrollLink>
                  <a
                    href="CSITSS 2024 Brochure.pdf"
                    className="mt-4 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                    download
                  >
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-4 w-full rounded-lg bg-[#141414]   py-4 px-6 text-center text-black shadow-lg">
          <p className="text-lg  text-blue-200 font-semibold">
            Organized by{' '}
            <span className="text-white">RV College of Engineering</span>
            </p>
        </div>


        <section>
          <div className="mt-6 flex flex-wrap justify-between">

            <div className='flex gap-4 w-[100%] px-12 py-6 border my-2 border-[#1d1d7c] border-t-[14px] rounded-lg bg-[#1f2124] text-white md:w-[49%] hover:shadow-lg hover:bg-[#191a31]'>
              <div className='bg-[#333333] h-fit w-fit p-3 rounded-md'>
                <svg className="fill-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-2xl my-1'>November 20-22, 2025</h3>
                <p className='text-sm'>Three days of engaging sessions.</p>
                <div className='bg-[#1d1d7c] opacity-80 w-fit h-fit mt-3 text-sm rounded-full px-3 py-1'>Date</div>
              </div>
            </div>

            <div className='flex gap-4 w-[100%] px-12 py-8 border my-2 border-t-[#661010] border-t-[14px] rounded-lg bg-[#1f2124] text-white md:w-[49%] hover:bg-[#1e1211]'>
              <div className='bg-[#333333] h-fit w-fit p-3 rounded-md'>
              <svg className="fill-[#a81010]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              </div>
              <div>
                <h3 className='font-bold text-2xl my-1'>RV College of Engineering</h3>
                <p className='text-sm'>Bangalore, Karnataka, India.</p>
                <div className='bg-[#661010] opacity-80 w-fit h-fit mt-3 text-sm rounded-full px-3 py-1'>Venue</div>
              </div>
            </div>

            <div className='flex gap-4 w-[100%] px-12 py-8 border my-2 border-t-[#432E54] border-t-[14px] rounded-lg bg-[#1f2124] text-white md:w-[49%] hover:bg-[#271c27]'>
              <div className='bg-[#333333] h-fit w-fit p-3 rounded-md'>
              <svg className="fill-[#6c458c]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
              </svg>
              </div>
              <div>
                <h3 className='font-bold text-2xl my-1'>8 successful editions of CSITSS</h3>
                <p className='text-sm'>Established in 2017.</p>
                <div className='bg-[#432E54] opacity-80 w-fit h-fit mt-3 text-sm rounded-full px-3 py-1'>Track Record</div>
              </div>
            </div>

            <div className='flex gap-4 w-[100%] px-12 py-8 border my-2 border-t-yellow-900 border-t-[14px] rounded-lg bg-[#1f2124] text-white md:w-[49%] hover:bg-[#222214]'>
              <div className='bg-[#333333] h-fit w-fit p-3 rounded-md'>
              <svg className="fill-yellow-900" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
              </div>
              <div>
                <h3 className='font-bold text-2xl my-1'>Global Participation</h3>
                <p className='text-sm'>Researchers from across the globe.</p>
                <div className='bg-yellow-900 opacity-80 w-fit h-fit mt-3 text-sm rounded-full px-3 py-1'>Track Record</div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
           
             

              <div className="animate-fadeIn2 flex flex-col justify-center">
                <h2 className="text-gradient mb-6 text-3xl font-bold text-black sm:text-4xl">
                  About CSITSS
                </h2>
                <p className="mb-8 text-xl font-normal leading-relaxed text-gray-900">
                  The 9<sup>th</sup> International Conference on Computational
                  Systems and Information Technology for Sustainable Solutions
                  [CSITSS — 2025] focuses on bringing together leading
                  academicians, scientists, researchers, industry
                  representatives, postdoctoral fellows, and research scholars
                  around the world to share their knowledge and research
                  expertise in Green Electronics, Renewable Energy, Robotics and
                  Automation,Photonics, Artificial Intelligence, Cyber-Physical
                  Systems, Quantum Mechanics, and Computing from <span> </span>
                  <span className="animated-date">
                    <span> </span>
                    <span>N</span>
                    <span>o</span>
                    <span>v</span>
                    <span>e</span>
                    <span>m</span>
                    <span>b</span>
                    <span>e</span>
                    <span>r</span>
                    <span> </span>
                    <span>20</span>
                    <span>
                      <sup>th</sup>
                    </span>
                    <span> </span>
                    <span>t</span>
                    <span>o</span>
                    <span> </span>
                    <span>22</span>
                    <span>
                      <sup>nd</sup>
                    </span>
                    <span> </span>
                    <span>2</span>
                    <span>0</span>
                    <span>2</span>
                    <span>5</span>
                  </span>
                  .
                  <br />
                  <br />
                  The conference has been successfully organized for the past
                  seven years with participants from all over India and abroad.
                  All peer-reviewed, selected, and presented papers from the
                  conference will be submitted for possible inclusion in the
                  IEEE digital library. International speakers will deliver
                  keynote talks on the latest technologies in these domains. The
                  CSITSS-2025 ensures to provide a platform for researchers
                  around the globe for knowledge exchange and networking. 
                </p>

                <a
                  className="inline-flex transform items-center rounded border bg-blue-600 px-8 py-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  href="https://cmt3.research.microsoft.com/CSITSS2024"
                >
                  <span className="text-sm font-medium">Submit Paper</span>
                  <svg
                    className="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            
            
         
              
            
          
        </section>

        

        <Element name="test4" className="element">
          <div className="flex flex-col items-center justify-center p-4">
          <Timeline />
          </div>
        </Element>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fadeIn mb-8 text-center text-3xl font-bold sm:text-4xl">
              Venue
            </h2>

            <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
              {/* Left side with the map */}
              <div className="relative w-full overflow-hidden rounded-lg md:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e|visibility:simplified&style=feature:landscape|element:geometry.fill|color:0x2b2b2b&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:geometry.fill|color:0x212a37&style=feature:water|element:labels.text.fill|color:0x3e606f"
                  width="100%"
                  height="400"
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Right side with the image */}
              <div className="flex w-full justify-center p-4 md:w-1/2">
                <img
                  src="./map2.jpg"
                  alt="Venue related image"
                  className="h-[400px] w-full cursor-pointer rounded-lg object-cover"
                  onClick={() => {
                    const modal = document.getElementById('modal')
                    if (modal) modal.classList.remove('hidden')
                  }}
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="animate-fadeIn mt-8 flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <a
                className="inline-flex items-center justify-center rounded-lg border bg-blue-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
              >
                <span className="text-sm font-medium">Open Maps</span>
                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                href="HOTELS.pdf"
              >
                <span className="text-sm font-medium">
                  Download Hotels List Near RVCE
                </span>
                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Modal for enlarged image */}
            <div
              id="modal"
              className="fixed inset-0 z-50 flex hidden items-center justify-center bg-black bg-opacity-75"
              onClick={() => {
                const modal = document.getElementById('modal')
                if (modal) modal.classList.add('hidden')
              }}
            >
              <img
                src="./map2.jpg"
                alt="Enlarged view"
                className="h-auto max-h-[80vh] w-auto max-w-[90vw] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>
            <span className="text-3xl font-bold sm:text-4xl">
              Previous Conference Images
            </span>
          </h1>
          <Gallery />
        </div>
      </section>
    </>
  )
}
