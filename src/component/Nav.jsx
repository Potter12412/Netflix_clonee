import React from 'react'

function Nav() {
  return (
    <div className='mx-auto grid grid-cols-[80%_20%] py-6 text-white bg-black sticky top-0 z-50  '> 
        <div className='flex gap-5'>
          <img className="w-20 ml-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" />
          <ul className='flex items-center gap-5 px-10 align-center '>
            <li><a href="#">หน้าหลัก</a></li>
            <li><a href="#">รายการทีวี</a></li>
            <li><a href="#">ภาพยนต์</a></li>
            <li><a href="#">มาใหม่เเละกำลังฮิต</a></li>
            <li><a href="#">รายการของฉัน</a></li>
            <li><a href="#">เลือกดูตามภาษา</a></li>
          </ul>
        </div>
        <div className='grid ml-20 grid-col '>
          <ul className='flex items-center gap-10 align-center '>
            <li><a className="" href="#">🔍</a></li>
            <li><a className="" href="#">🔔</a></li>
            <a href="#"><img className= "w-8"src="https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg" alt="" /></a>
          </ul>
        </div>
        
        
        
      </div>
  )
}

export default Nav