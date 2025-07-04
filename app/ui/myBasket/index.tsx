import Image from "next/image"
import image from '@/app/assets/images/image 13.svg'
import './css/MyBasket.css'
const MyBasket = () => {
    return (
        <div className="my_basket_container">
            <div className="basket_top">
                <div className="basket_image">
                    <Image className="rounded-[8px]" src={image} alt="basket-image" width={55} height={33} objectFit="cover" />
                </div>
                <div className="basket_top_left">
                    <div className="basket_top_left_title">
                        <h6>
                            Qizil əhmədi alması 1 kq
                        </h6>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_9_7928)">
                                <path d="M10.8454 6.15918C10.6255 6.15918 10.4473 6.3374 10.4473 6.55731V14.0819C10.4473 14.3016 10.6255 14.48 10.8454 14.48C11.0653 14.48 11.2435 14.3016 11.2435 14.0819V6.55731C11.2435 6.3374 11.0653 6.15918 10.8454 6.15918Z" fill="currentColor" fillOpacity="0.21" />
                                <path d="M6.14617 6.15918C5.92627 6.15918 5.74805 6.3374 5.74805 6.55731V14.0819C5.74805 14.3016 5.92627 14.48 6.14617 14.48C6.36608 14.48 6.5443 14.3016 6.5443 14.0819V6.55731C6.5443 6.3374 6.36608 6.15918 6.14617 6.15918Z" fill="currentColor" fillOpacity="0.21" />
                                <path d="M2.72254 5.0596V14.8686C2.72254 15.4483 2.93513 15.9928 3.30651 16.3835C3.67617 16.7752 4.19062 16.9976 4.72903 16.9985H12.2617C12.8002 16.9976 13.3147 16.7752 13.6842 16.3835C14.0556 15.9928 14.2682 15.4483 14.2682 14.8686V5.0596C15.0064 4.86365 15.4848 4.15044 15.386 3.39292C15.2871 2.63555 14.6419 2.06899 13.878 2.06884H11.8396V1.57118C11.8419 1.15268 11.6765 0.750826 11.3802 0.455187C11.0839 0.159704 10.6815 -0.00483392 10.263 -0.00141253H6.72774C6.30924 -0.00483392 5.90676 0.159704 5.6105 0.455187C5.31424 0.750826 5.14877 1.15268 5.1511 1.57118V2.06884H3.11273C2.34883 2.06899 1.70359 2.63555 1.60468 3.39292C1.50592 4.15044 1.9843 4.86365 2.72254 5.0596ZM12.2617 16.2023H4.72903C4.04833 16.2023 3.51879 15.6175 3.51879 14.8686V5.09459H13.4719V14.8686C13.4719 15.6175 12.9424 16.2023 12.2617 16.2023ZM5.94735 1.57118C5.94471 1.36388 6.0262 1.16435 6.17332 1.01801C6.32028 0.871664 6.52028 0.791261 6.72774 0.794838H10.263C10.4704 0.791261 10.6704 0.871664 10.8174 1.01801C10.9645 1.16419 11.046 1.36388 11.0434 1.57118V2.06884H5.94735V1.57118ZM3.11273 2.86509H13.878C14.2738 2.86509 14.5946 3.18592 14.5946 3.58171C14.5946 3.97751 14.2738 4.29834 13.878 4.29834H3.11273C2.71694 4.29834 2.39611 3.97751 2.39611 3.58171C2.39611 3.18592 2.71694 2.86509 3.11273 2.86509Z" fill="currentColor" fillOpacity="0.21" />
                                <path d="M8.49578 6.15918C8.27588 6.15918 8.09766 6.3374 8.09766 6.55731V14.0819C8.09766 14.3016 8.27588 14.48 8.49578 14.48C8.71568 14.48 8.89391 14.3016 8.89391 14.0819V6.55731C8.89391 6.3374 8.71568 6.15918 8.49578 6.15918Z" fill="currentColor" fillOpacity="0.21" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_7928">
                                    <rect width="17" height="17" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="basket_top_quantity">
                        <div className="basket_buttons">
                            <button className="decriment_btn">
                                <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="3" fill="white" />
                                </svg>

                            </button>
                            <div className="basket_count">
                                2
                            </div>
                            <button className="incriment_btn">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="6" width="15" height="3" fill="white" />
                                    <rect x="9" width="15" height="3" transform="rotate(90 9 0)" fill="white" />
                                </svg>

                            </button>
                        </div>
                        <div className="basket_price">
                            10.35 AZN
                        </div>
                    </div>
                </div>
            </div>

            <div className="basket_bottom">
                <div className="basket_total_price">
                    <p>Ümumi:</p>
                    <p>
                        13.65 AZN
                    </p>
                </div>
                <div className="basket_total_price border-b border-[#f3f3f3] mb-4">
                    <p>Çatdırılma:</p>
                    <p>
                        Pulsuz
                    </p>
                </div>
                <div className="basket_total_sum">
                    <p>Yekun məbləğ:</p>
                    <p>
                        13.65 AZN
                    </p>
                </div>
                <button className="basket_confirm_btn">
                    Sifarişi tamamla
                </button>
            </div>
        </div>
    )
}

export default MyBasket