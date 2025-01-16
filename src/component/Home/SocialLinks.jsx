import React from 'react'

const SocialLinks = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center py-8">
      <div className="w-full md:w-1/4 p-4">
        <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
          <div className="text-[var(--primary-color)] p-4">
            <i className="fab fa-instagram text-4xl"></i>
          </div>
          <h3 className="text-gray-900 mb-2">Instagram Profile</h3>
          <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
          <a
            href="https://www.yelp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          ></a>
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              backgroundImage:
                'url(https://img.freepik.com/premium-photo/instagram-social-network-icon-connecting-system-with-other-users-technological-background-with-code-elements-3d_272306-177.jpg?w=826)',
            }}
          ></div>
        </div>
      </div>

      <div className="w-full md:w-1/4 p-4">
        <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
          <div className="text-[var(--primary-color)] p-4">
            <i className="fab fa-facebook-f text-4xl"></i>
          </div>
          <h3 className="text-gray-900 mb-2">Facebook Page</h3>
          <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
          <a
            href="https://www.facebook.com/QodeInteractive/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          ></a>
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              backgroundImage:
                'url(https://img.freepik.com/premium-photo/facebook-social-network-icon-connecting-system-with-other-users-technological-background-with-code-elements-3d_272306-202.jpg?w=826)',
            }}
          ></div>
        </div>
      </div>

      <div className="w-full md:w-1/4 p-4">
        <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
          <div className="text-[var(--primary-color)] p-4">
            <i className="fab fa-x-twitter text-4xl"></i>
          </div>
          <h3 className="text-gray-900 mb-2">Our Twitter Profile</h3>
          <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
          <a
            href="https://twitter.com/QodeInteractive"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          ></a>
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              backgroundImage:
                'url(https://img.freepik.com/free-vector/gradient-monochrome-twitter-logo-template_23-2150728924.jpg?t=st=1736501665~exp=1736505265~hmac=2287189037ac4765e76652a70972d9c7729bc98b883219d8a7b2016696fad7c5&w=740)',
            }}
          ></div>
        </div>
      </div>

      <div className="w-full md:w-1/4 p-4">
        <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
          <div className="text-[var(--primary-color)] p-4">
            <i className="fab fa-youtube text-4xl"></i>
          </div>
          <h3 className="text-gray-900 mb-2">Youtube Profile</h3>
          <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
          <a
            href="http://www.xing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          ></a>
          <div className="bg-white h-0 absolute inset-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              backgroundImage:
                'url(https://media.istockphoto.com/id/1344290509/photo/3d-play-icon-youtube.jpg?s=1024x1024&w=is&k=20&c=CKEQUNvgOSxcOIVBvCwZS71I61Ai8ZS07S9eJVVJE2w=)',
            }}
          ></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SocialLinks
