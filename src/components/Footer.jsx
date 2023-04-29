const Footer = () => {
    const year = "2022";
    return(
        <footer className="h-[394px] text-white bg-foundation-grey-800 border-t-[1px] border-solid border-b-white-100 ">
            <div className="container flex justify-between pt-6 mx-auto border-b-[1px] h-[302px] ">
                <div className="flex flex-col gap-4 w-[291px]">
                    <h4 className="text-xl font-medium">About Shop</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <p>Gui guicarlosjoinhas@gmail.com</p>
                    <p>T. 44998278759</p>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-4">Company</h4>
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Accounts</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-4">Customer Care</h4>
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-4">Follow us</h4>
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="container flex mx-auto items-center">
                <p className="mt-5">
                    {year} www.guisposito.com all right reserved
                </p>
                <p className="mt-5 ml-auto">Privacy Policy & Term of Use</p>
            </div>
        </footer>
    )
}

export default Footer;