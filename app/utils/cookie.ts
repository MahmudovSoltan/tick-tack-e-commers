// utils/cookie.ts

// Cookie yazmaq
export function setCookie(name: string, value: string, days = 1) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

// Cookie oxumaq
export function getCookie(name: string): string | null {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim()
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
    }
    return null
}


export function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}

