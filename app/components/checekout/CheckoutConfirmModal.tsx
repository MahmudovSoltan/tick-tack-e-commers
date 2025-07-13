"use client"
import { useCountdown } from "@/app/hooks/useCountdown"
import {  useEffect } from "react"
import  CheckoutIcon from '@/app/assets/icons/chekcout.svg'
import Image from "next/image"


const CheckoutConfirmModal = ({ handleSubmit,closeModal }) => {
  const time = useCountdown(180)

  // Bu useEffect yalnız clientdə işləyəcək
  useEffect(() => {
    if (time === "00:00") {
      closeModal(false)
    }
  }, [time, closeModal])

  return (
    <div className="confirm_modal_cotainer">
      <div onClick={() => closeModal(false)} className="owarlay"></div>
      <div className="soncirm_modal_content">
        <div>
          {/* SVG burda qalır – istəsən ayrıca komponentə bölə bilərsən */}
           <Image src={CheckoutIcon} alt="icon"  />
        </div>
        <div>
          <div className="confirm_text">Sifarişinizi təsdiqləyiniz</div>
          <p className="time">Vaxtın bitməsinə {time} qaldı</p>
        </div>
        <div className="modal_btns">
          <button onClick={handleSubmit}>Təsdiqlə</button>
          <button onClick={closeModal}>İndi yox</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutConfirmModal
