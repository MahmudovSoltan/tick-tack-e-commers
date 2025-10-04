"use client"
import { useAppSelector } from "@/app/store/hooks"
import { getAllBasketProducts } from "@/app/store/slices/basketSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const MobileHeader = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    const navigate = useRouter()
    const navigateFunc = (links: string) => {
        navigate.push(`/${links}`)
    }
    const { baskets } = useAppSelector(state => state.baskets)

    useEffect(() => {
        getAllBasketProducts()
    }, [])

    return (
        <div className="lg:hidden">
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`
                fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#2B3043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="p-6">
                    <ul className="space-y-4">
                        <li
                            onClick={() => navigateFunc('account')}
                            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.19668 9.69668C3.01357 8.87982 3.98587 8.27511 5.04671 7.90904C3.91052 7.12649 3.16406 5.81684 3.16406 4.33594C3.16406 1.94511 5.10917 0 7.5 0C9.89083 0 11.8359 1.94511 11.8359 4.33594C11.8359 5.81684 11.0895 7.12649 9.95326 7.90904C11.0141 8.27511 11.9864 8.87982 12.8033 9.69668C14.2199 11.1133 15 12.9967 15 15H13.8281C13.8281 11.5107 10.9893 8.67188 7.5 8.67188C4.01065 8.67188 1.17188 11.5107 1.17188 15H0C0 12.9967 0.780147 11.1133 2.19668 9.69668ZM7.5 7.5C9.24466 7.5 10.6641 6.08063 10.6641 4.33594C10.6641 2.59125 9.24466 1.17188 7.5 1.17188C5.75534 1.17188 4.33594 2.59125 4.33594 4.33594C4.33594 6.08063 5.75534 7.5 7.5 7.5Z" fill="#2B3043" />
                                </svg>
                            </div>
                            <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Hesabım</span>
                        </li>

                        <li
                            onClick={() => navigateFunc('favorites')}
                            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-pink-50 cursor-pointer transition-all duration-200 group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg group-hover:bg-pink-100 transition-colors">
                                <svg width="22" height="22" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_10_8604)">
                                        <path d="M15.6269 2.41488C14.7367 1.52469 13.5582 1.03816 12.3004 1.03816C11.0426 1.03816 9.86051 1.5283 8.97032 2.41848L8.50541 2.88339L8.03329 2.41127C7.14311 1.52109 5.9574 1.02734 4.69961 1.02734C3.44542 1.02734 2.26332 1.51748 1.37674 2.40406C0.486557 3.29425 -0.00358424 4.47635 1.97344e-05 5.73414C1.97344e-05 6.99193 0.493765 8.17043 1.38395 9.06061L8.15222 15.8289C8.24592 15.9226 8.37206 15.973 8.4946 15.973C8.61713 15.973 8.74327 15.9262 8.83698 15.8325L15.6197 9.07503C16.5098 8.18484 17 7.00274 17 5.74495C17.0036 4.48716 16.5171 3.30506 15.6269 2.41488ZM14.9349 8.38667L8.4946 14.8017L2.0687 8.37585C1.36232 7.66948 0.973094 6.73244 0.973094 5.73414C0.973094 4.73584 1.35872 3.7988 2.0651 3.09603C2.76788 2.39325 3.70491 2.00402 4.69961 2.00402C5.69791 2.00402 6.63855 2.39325 7.34493 3.09963L8.15943 3.91413C8.35044 4.10514 8.65678 4.10514 8.84779 3.91413L9.65508 3.10684C10.3615 2.40046 11.3021 2.01123 12.2968 2.01123C13.2915 2.01123 14.2285 2.40046 14.9349 3.10324C15.6413 3.80961 16.0269 4.74665 16.0269 5.74495C16.0305 6.74325 15.6413 7.68029 14.9349 8.38667Z" fill="#2B3043" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_10_8604">
                                            <rect width="17" height="17" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors">Siyahılarım</span>
                        </li>

                        <li
                            onClick={() => navigateFunc('basket')}
                            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 cursor-pointer transition-all duration-200 group relative"
                        >
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg group-hover:bg-green-100 transition-colors">
                                <svg width="24" height="22" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.26074 14.2559C8.15272 14.256 8.87601 14.9791 8.87598 15.8711C8.87586 16.763 8.15265 17.4862 7.26074 17.4863C6.36877 17.4863 5.64562 16.7631 5.64551 15.8711C5.64551 14.979 6.36866 14.2559 7.26074 14.2559ZM7.26074 15.0518C6.80811 15.0518 6.44141 15.4185 6.44141 15.8711C6.4415 16.3236 6.80817 16.6904 7.26074 16.6904C7.71323 16.6903 8.08001 16.3236 8.08008 15.8711C8.08008 15.4185 7.71328 15.0519 7.26074 15.0518Z" fill="#2B3043" stroke="#2B3043" strokeWidth="0.1" />
                                    <path d="M15.0869 14.2559C15.9789 14.256 16.7021 14.9791 16.7021 15.8711C16.702 16.763 15.9788 17.4862 15.0869 17.4863C14.1949 17.4863 13.4718 16.7631 13.4717 15.8711C13.4717 14.979 14.1948 14.2559 15.0869 14.2559ZM15.0869 15.0518C14.6343 15.0518 14.2676 15.4185 14.2676 15.8711C14.2677 16.3236 14.6343 16.6904 15.0869 16.6904C15.5394 16.6903 15.9062 16.3236 15.9062 15.8711C15.9062 15.4185 15.5395 15.0519 15.0869 15.0518Z" fill="#2B3043" stroke="#2B3043" strokeWidth="0.1" />
                                    <path d="M2.81738 0.950195C3.59601 0.957919 4.29371 1.38782 4.60254 2.04199L4.65918 2.17578V2.17676L5.02246 3.20117L18.5811 3.375H18.585L18.6875 3.39355C18.754 3.41127 18.8165 3.43994 18.8721 3.47852L18.9502 3.54395L18.9512 3.54492C19.0461 3.64729 19.0734 3.78879 19.0244 3.91699L19.0264 3.91797L18.0234 7.78613C17.794 8.67965 16.9812 9.34041 15.9971 9.44043H15.9961L7.2334 10.2842L7.08008 10.6016C6.96484 10.8922 7.00153 11.2164 7.17969 11.4795C7.35945 11.7452 7.67376 11.911 8.0166 11.9189H16.1377C16.392 11.9189 16.6055 12.1105 16.6055 12.3545C16.6053 12.5983 16.3919 12.7891 16.1377 12.7891H8.01465C7.36621 12.7711 6.76638 12.4624 6.40918 11.96C6.04857 11.4483 5.97616 10.8069 6.21582 10.2373L6.2168 10.2354L6.41602 9.81152L3.77148 2.46094L3.70801 2.32617C3.53508 2.02585 3.1965 1.8271 2.81543 1.81934H1.41797C1.16363 1.81934 0.950195 1.62872 0.950195 1.38477C0.950268 1.14087 1.16368 0.950195 1.41797 0.950195H2.81738ZM7.23438 9.39453L15.8828 8.57129H15.8838C16.4859 8.52725 16.9824 8.12636 17.1123 7.58887V7.58789L17.9941 4.24316L5.33008 4.07129L7.23438 9.39453Z" fill="#2B3043" stroke="#2B3043" strokeWidth="0.1" />
                                </svg>
                            </div>
                            <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">Səbətim</span>

                            {/* Basket Count Badge */}
                            {baskets?.count > 0 && (
                                <span className="absolute left-8 top-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform -translate-y-1/2 shadow-sm">
                                    {baskets.count}
                                </span>
                            )}
                        </li>
                    </ul>
                </nav>

                {/* Footer Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
                    <div className="space-y-3">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200">
                            Daxil ol
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                            Qeydiyyat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader