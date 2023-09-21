import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex p-8 flex-col shadow-sm border-4 justify-center m-auto gap-4'>
      <span className='text-center'>LoginForm</span>
      <button>네이버로 로그인</button>
      <button>구글로 로그인</button>
      <button>비회원으로 이용하기</button>
    </div>
  )
}

export default LoginForm