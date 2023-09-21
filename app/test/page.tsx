import React from 'react'
import type { NextPage } from 'next';
import RoutingButton from '../_components/RoutingButton';
const test1:NextPage = () => {
  function haldleClick(){
    alert("테스트");
  }
  return (
    <div className="bg-emerald-200 flex min-h-screen flex-col items-center p-24 gap-4">
      <RoutingButton href='/single'>혼자 플레이하기</RoutingButton>
      <RoutingButton href='/multi'>같이 플레이하기</RoutingButton>

    </div>
  );
};
export default test1;