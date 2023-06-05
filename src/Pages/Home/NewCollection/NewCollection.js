import React from 'react';

const NewCollection = () => {
    return (
        <div className='mb-24 mt-24'>
            <section className='mb-9'>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

            <p className="mt-4 text-gray-500">
            We offer a wide range of products from everyday promotional pieces to unique, custom made gifts!
            </p>
          </header>

          <a
            href="/allcategories"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            See All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="block group">
              <img
                src="https://i.ibb.co/X3V5V0P/Free-Samsung-Galaxy-Note10-Mockup-PSD.jpg"
                alt=""
                className="object-cover w-full rounded aspect-square"
              />
            </a>
          </li>
          <li>
            <a href="#" className="block group">
              <img
                src="https://i.ibb.co/Jy374YX/i-OS-17-on-Phone-Feature.jpg"
                alt=""
                className="object-cover w-full rounded aspect-square"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default NewCollection;