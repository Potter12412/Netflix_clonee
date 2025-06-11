import React from 'react'

function Section1() {
  return (
    <div className='bg-[url(https://occ-0-1479-1480.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaxji47LqqNGVPgQTOYJWUtooEQkatlTvGfgARVRx-TdK2TXyODjDmoeo3W7ZdVg_LGk1xbQjHvmqIAMnS9JewO52CdZxOhMsc46wPVdlG0nVVAZAiVIw45WaCweOajvlGfY.jpg?r=309)] 
    bg-cover bg-center bg-no-repeat py-60 px40 grid grid-col-3[] align-center justify-start'>
      
      <div className="col-span-2 mt-10 ml-20 space-y-6 text-white">
        <h1 className="text-6xl font-extrabold">Monkey D. Luffy</h1>
        <p className="text-lg leading-relaxed">
          เมื่อหนุ่มเนิร์ดโคจรมาเจอเด็กสาวที่เชื่อเรื่องผี ทั้งคู่จึงพยายามทำทุกทาง<br />
          เพื่อพิสูจน์ว่าอีกฝ่ายผิด จนนำไปสู่การผจญภัยเร้นลับหลุดโลกมากมาย<br />
          พร้อมเพลงเปิดซีรีส์ฝีมือคริปปั้นบีตส์
        </p>
        <div className="flex gap-7">
          <button className="px-8 py-3 font-semibold text-black bg-white rounded hover:bg-gray-300">
            ▶ เล่น
          </button>
          <button className="px-8 py-3 font-semibold bg-gray-700 rounded hover:bg-gray-600">
            ℹ ข้อมูลเพิ่มเติม
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Section1