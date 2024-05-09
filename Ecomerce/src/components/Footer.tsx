const Footer = () => {
    return (
      <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Homely</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
                <ul className="text-gray-700">
                  <li className="mb-2">
                    <a href="/productos" className="hover:text-gray-300 transition-colors duration-300">Products</a>
                  </li>
                  <li className="mb-2">
                    <a href="/ofertas" className="hover:text-gray-300 transition-colors duration-300">Offer</a>
                  </li>
                  <li className="mb-2">
                    <a href="/contacto" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
                  </li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-lg font-semibold mb-4 text-white">Help and Support</h2>
                <ul className="text-gray-700">
                  <li className="mb-2">
                    <a href="/preguntas-frecuentes" className="hover:text-gray-300 transition-colors duration-300">Frequent questions</a>
                  </li>
                  <li className="mb-2">
                    <a href="/politicas" className="hover:text-gray-300 transition-colors duration-300">Policies</a>
                  </li>
                </ul>
              </div>
  
              <div>
                <h2 className="text-lg font-semibold mb-4 text-white">Legal</h2>
                <ul className="text-gray-700">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center text-gray-400">© 2023 <a href="https://Homely.com/" className="hover:underline">Homely™</a>. All Rights Reserved.</span>
            <div className="flex justify-center mt-4 sm:justify-center sm:mt-0">
  <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-300 dark:hover:text-white">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
      <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
    </svg>
    <span className="sr-only">Facebook page</span>
  </a>
  <a href="https://www.instagram.com" className="text-gray-500 hover:text-gray-300 dark:hover:text-white ms-5">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" className="w-6 h-6" fill="currentColor">
      <path d="M16 3C8.83 3 3 8.83 3 16L3 34C3 41.17 8.83 47 16 47L34 47C41.17 47 47 41.17 47 34L47 16C47 8.83 41.17 3 34 3L16 3zM37 11C38.1 11 39 11.9 39 13C39 14.1 38.1 15 37 15C35.9 15 35 14.1 35 13C35 11.9 35.9 11 37 11zM25 14C31.07 14 36 18.93 36 25C36 31.07 31.07 36 25 36C18.93 36 14 31.07 14 25C14 18.93 18.93 14 25 14zM25 16C20.04 16 16 20.04 16 25C16 29.96 20.04 34 25 34C29.96 34 34 29.96 34 25C34 20.04 29.96 16 25 16z"></path>
    </svg>
    <span className="sr-only">Instagram</span>
  </a>
  <a href="https://twitter.com/?lang=es" className="text-gray-500 hover:text-gray-300 dark:hover:text-white ms-5">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="17" viewBox="0 0 20 17" className="w-4 h-4" aria-hidden="true" fill="currentColor">
      <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
    </svg>
    <span className="sr-only">Twitter page</span>
  </a>
</div>

          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  