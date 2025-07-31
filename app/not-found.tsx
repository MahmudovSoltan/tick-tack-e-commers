"use client"

import { useRouter } from "next/navigation";
import image from '@/app/assets/images/404.png'
import Image from "next/image";
// app/not-found.tsx
export default function NotFound() {
  const navigate = useRouter()
  return (
    <div className="not-found">
      <div className='not-found'>
        <Image   src={image} alt="404 Not Found" />
        <p className='not-found-text'>Səhifə tapılmadı, deyəsən bir problem baş verib!</p>
        <button title='' className='btn-back' style={{ width: "213px", marginTop: "50px" }} onClick={() => navigate.back()} >
          Geri qayıt
        </button>
      </div>

    </div>
  );
}