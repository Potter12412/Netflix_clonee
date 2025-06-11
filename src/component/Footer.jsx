import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-black '>
       
        <div className='grid items-center gap-10 py-20 text-white grid-cols align-center px-50'>
            <div className='flex items-center ml-33 gap-7 align-center'>
                <a href="#"><img className="w-10 h-10 rounded-full" src="https://freepnglogo.com/images/all_img/1730342312_facebook-icon-png.png" /></a>
                <a href="#"><img className="w-10 h-10 rounded-full" src="https://www.citypng.com/public/uploads/preview/hd-white-outline-round-instagram-logo-icon-png-7017516951188810uvfjvesqu.png" /></a>
                <a href="#"><img className="w-10 h-10 rounded-full" src="data:image/png;base64,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" /></a>
                <a href="#"><img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCBioLatefRhkym-cLXclsyBBdJUHHz5Z0w&s" /></a>
            </div>
            <div className='flex flex-row items-center justify-center gap-20'>
                <div className='grid gap-10 grid-cols '>
                    <div>คำอธิบายเสียง</div>
                    <div>ศูนย์ช่วยเหลือ</div>
                    <div>บัตรของขวัญ</div>
                    <div>ศูนย์สื่อมวลชล</div>
                </div>
                <div className='grid gap-10 grid-cols '>
                    <div>นักลงทุนสัมพันธ์</div>
                    <div>ตำเเหน่งงาน</div>
                    <div>Netflix Shop</div>
                    <div>ข้อกำหนดการใช้งาน</div>
                </div>
                <div className='grid gap-10 grid-cols '>
                    <div>ความเป็นส่วนตัว</div>
                    <div>ประกาศเเจ้งกฎหมาย</div>
                    <div>การตั่งค่าคุกกี้</div>
                    <div>ข้อมูลบริษัท</div>
                </div>
                <div className='grid gap-10 '>
                    <div>ติดต่อเรา</div>
                    <div>ห้ามขายหรือเเชร์ข้อมูลส่วนตัวของฉัน</div>
                    <div>ทางเลือกโฆษณา</div>
                    <div>ทีมของเรา    </div>
                </div>
            </div>
            <div className='grid items-center gap-5 ml-33 '>
                <div className=''>
                    <button className='px-5 py-2 border border-white'>รหัสบริการ</button>
                </div>
                <div>@ 1997-2025Netflic,Inc.</div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer