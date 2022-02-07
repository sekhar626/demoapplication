const createFooter = () => {
    let nav = document.querySelector('.footer_section')
    nav.innerHTML = `
    <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-6 pl-5">
                        <div class="footer_title">
                            <img src="assets/images/logo.png" width="150px" class="img img-fluid" alt="logo">
                        </div>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, totam est illum ipsum
                            quas ad
                            dignissimos magni veritatis natus voluptatem.
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="footer_title pt-3 mb-3">
                            <h3>Quick Links</h3>
                        </div>
                        <div class="footer_links">
                            <ul>
                                <li><a href="javascript:;">About</a></li>
                                <li><a href="javascript:;">Offers & Discounts</a></li>
                                <li><a href="javascript:;">Get Coupon</a></li>
                                <li><a href="javascript:;">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="footer_title pt-3 mb-3">
                            <h3>New Products</h3>
                        </div>
                        <div class="footer_links">
                            <ul>
                                <li><a href="javascript:;">Woman Cloth</a></li>
                                <li><a href="javascript:;">Fashion Accessories</a></li>
                                <li><a href="javascript:;">Man Accessories</a></li>
                                <li><a href="javascript:;">Rubber made Toys</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="footer_title pt-3 mb-3">
                            <h3>Support</h3>
                        </div>
                        <div class="footer_links">
                            <ul>
                                <li><a href="javascript:;">Frequently Asked Questions</a></li>
                                <li><a href="javascript:;">Terms & Conditions</a></li>
                                <li><a href="javascript:;">Privacy Policy</a></li>
                                <li><a href="javascript:;">Report a Payment Issue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-top">
                <h6 class="text-center mt-3">Copyright ©2020 All rights reserved
                </h6>
            </div>
        </footer>
    `
}
createFooter()