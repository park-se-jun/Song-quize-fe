import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white p-4 sticky top-0'>
        <ul className='flex-row flex gap-4'>
            <li>근래맞추기</li>
            <li className='flex-grow'/>
            <li>도움말</li>
            <li>로그인</li>
            <li>업데이트 내역</li>
        </ul>
    </div>
  )
}

export default Header