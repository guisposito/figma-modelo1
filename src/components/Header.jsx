import logo from '../img/logo.png';
import bgheader from '../img/bg-header.jpg';

function Header() {
    const textheader = "Premium High Waisted";
    const textheaderlg = "Women Tracks NOW Available";
    return(
        <header>
            <div className="header-top flex items-center bg-foundation-grey mx-auto h-9">
                <div className="container flex justify-end mx-auto">
                    <ul className="list-top flex space-x-3 text-foundation-grey-200 text-[13px] font-semibold font-josefins">
                        <li className=""><a href="#">Track Order</a></li>
                        <li className="px-3 text-center border-x-[1px] border-foundation-grey-200"><a href="#">Register</a></li>
                        <li><a href="#">Sign in</a></li>
                    </ul>
                </div>
            </div>
            <div className="header-menu container flex items-center justify-between mx-auto h-[100px] ">
                <div className="logo flex items-center">
                    <a href="#">
                        <img src={logo} width="36" height="40" alt="" />
                    </a>
                </div>
                <ul className="list-menu flex gap-8 text-foundation-grey-400 font-semibold">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Men</a></li>
                    <li id="dropdown" className="relative transition-all duration-30 cursor-pointer">
                        <a href="#">Women</a>
                        <ul class="dropdown-content absolute right-0 left-0 hidden text-sm bg-white w-36 transition-all duration-300">
                            <li class="p-1"><a href="#">Women Teens</a></li>
                            <li class="p-1"><a href="#">Women Trousers</a></li>
                            <li class="p-1"><a href="#">Women Tank Tops</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
                <div className="icons flex">
                    <div className="serach mr-5">
                        <a href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 22L20 20" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.19 19.75H7.53999C6.54999 19.75 5.59999 19.33 4.92999 18.6C4.25999 17.87 3.92 16.89 4 15.9L4.83 5.94C4.86 5.63 4.74999 5.33001 4.53999 5.10001C4.32999 4.87001 4.04 4.75 3.73 4.75H2C1.59 4.75 1.25 4.41 1.25 4C1.25 3.59 1.59 3.25 2 3.25H3.74001C4.47001 3.25 5.15999 3.56 5.64999 4.09C5.91999 4.39 6.12 4.74 6.23 5.13H18.72C19.73 5.13 20.66 5.53 21.34 6.25C22.01 6.98 22.35 7.93 22.27 8.94L21.73 16.44C21.62 18.27 20.02 19.75 18.19 19.75ZM6.28 6.62L5.5 16.02C5.45 16.6 5.64 17.15 6.03 17.58C6.42 18.01 6.95999 18.24 7.53999 18.24H18.19C19.23 18.24 20.17 17.36 20.25 16.32L20.79 8.82001C20.83 8.23001 20.64 7.67001 20.25 7.26001C19.86 6.84001 19.32 6.60999 18.73 6.60999H6.28V6.62Z" fill="#9D9D9D"/>
                                <path d="M16.25 24.75C15.15 24.75 14.25 23.85 14.25 22.75C14.25 21.65 15.15 20.75 16.25 20.75C17.35 20.75 18.25 21.65 18.25 22.75C18.25 23.85 17.35 24.75 16.25 24.75ZM16.25 22.25C15.97 22.25 15.75 22.47 15.75 22.75C15.75 23.03 15.97 23.25 16.25 23.25C16.53 23.25 16.75 23.03 16.75 22.75C16.75 22.47 16.53 22.25 16.25 22.25Z" fill="#9D9D9D"/>
                                <path d="M8.25 24.75C7.15 24.75 6.25 23.85 6.25 22.75C6.25 21.65 7.15 20.75 8.25 20.75C9.35 20.75 10.25 21.65 10.25 22.75C10.25 23.85 9.35 24.75 8.25 24.75ZM8.25 22.25C7.97 22.25 7.75 22.47 7.75 22.75C7.75 23.03 7.97 23.25 8.25 23.25C8.53 23.25 8.75 23.03 8.75 22.75C8.75 22.47 8.53 22.25 8.25 22.25Z" fill="#9D9D9D"/>
                                <path d="M21 10.75H9C8.59 10.75 8.25 10.41 8.25 10C8.25 9.59 8.59 9.25 9 9.25H21C21.41 9.25 21.75 9.59 21.75 10C21.75 10.41 21.41 10.75 21 10.75Z" fill="#9D9D9D"/>
                                <circle cx="21" cy="6" r="6" fill="#111111"/>
                                <path d="M20 2H22V10H20.8721V3.1307H20V2Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-img bg-gradient-to-b from-bg-grey-100 to-bg-grey-200">
                <div className="flex justify-start items-center h-[667px] bg-gradient-to-b from-bg-grey-200 to-bg-grey-100" id="bg-header">
                    <div className="text-left flex-col mx-auto container">
                        <h2 className="flex-row text-xl font-medium font-raleway">{textheader}</h2>
                        <p className="flex-row leading-[120%] text-6xl mt-3 w-[600px] font-semibold font-josefins">{textheaderlg}</p>
                        <button className="mt-6 w-44 h-14 bg-black  uppercase text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;