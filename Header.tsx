import Link from "next/link"

const Header = () => {
  return (
    <div>
      <ul className="flex gap-2 bg-purple-600">
        <li><Link href="https://www.facebook.com/share/EKwJ9SZ7VMLdxUYz/">Facebook</Link></li>
        <li><Link href="https://www.tiktok.com/@rivayatiandaz1?is_from_webapp=1&sender_device=pc">Tik tok</Link></li>
        <li><Link href="mailto:rivayitandaz@gmail.com">E-mail</Link></li>
        <li><Link href="https://wa.me/qr/FWX3BWWPABVRG1 ">Whatsapp</Link></li>
      </ul>
    </div>
  )
}

export default Header
