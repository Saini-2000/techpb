import React from 'react'

const SocialLinks = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center py-8">
      <div className="w-full md:w-1/4 p-4">
      <a
  href="https://www.instagram.com/techpanjab/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative block"
>
  <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
    <div className="text-[var(--primary-color)] p-4">
      <i className="fab fa-instagram text-4xl"></i>
    </div>
    <h3 className="text-gray-900 mb-2">Instagram Profile</h3>
    <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/premium-photo/instagram-social-network-icon-connecting-system-with-other-users-technological-background-with-code-elements-3d_272306-177.jpg?w=826)',
      }}
    ></div>
  </div>
</a>

      </div>

      <div className="w-full md:w-1/4 p-4">
      <a
            href="https://www.facebook.com/QodeInteractive/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          ></a>
        <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
          <div className="text-[var(--primary-color)] p-4">
            <i className="fab fa-facebook-f text-4xl"></i>
          </div>
          <h3 className="text-gray-900 mb-2">Facebook Page</h3>
          <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
     
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
     
      <a href="https://www.linkedin.com/in/tech-panjab/" target="_blank" rel="noopener noreferrer">
  <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
    <div className="text-[var(--primary-color)] p-4">
      <i className="fab fa-linkedin text-4xl"></i>
    </div>
    <h3 className="text-gray-900 mb-2">Our LinkedIn Profile</h3>
    <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
    
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      style={{
        backgroundImage:
          'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PAS27Zyh4H1OX6ZNvbhNLE62dJfF7vsQ5A&s)',
      }}
    ></div>
  </div>
</a>

      </div>

      <div className="w-full md:w-1/4 p-4">
      <a href="https://www.youtube.com/@techpanjab" target="_blank" rel="noopener noreferrer">
  <div className="relative bg-white text-center shadow-md rounded-lg overflow-hidden group">
    <div className="text-[var(--primary-color)] p-4">
      <i className="fab fa-youtube text-4xl"></i>
    </div>
    <h3 className="text-gray-900 mb-2">YouTube Profile</h3>
    <div className="border-b-2 border-[var(--primary-color)] w-16 mx-auto mb-4"></div>
    
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      style={{
        backgroundImage:
          'url(https://media.istockphoto.com/id/1344290509/photo/3d-play-icon-youtube.jpg?s=1024x1024&w=is&k=20&c=CKEQUNvgOSxcOIVBvCwZS71I61Ai8ZS07S9eJVVJE2w=)',
      }}
    ></div>
  </div>
</a>

      </div>
    </div>
    </>
  )
}

export default SocialLinks
