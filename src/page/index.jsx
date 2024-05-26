import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='iphone-x'>
        <div className='left-side'>
          <div className='time'>
            <div className='colon' />
          </div>
        </div>
        <div className='right-side'>
          <div className='wifi' />
          <div className='battery' />
          <div className='mobile-signal' />
        </div>
      </div>
      <div className='flex-row-dbf'>
        <div className='header'>
          <div className='header-1'>
            <div className='icon-chevron-left'>
              <div className='chevron-left-thin' />
            </div>
          </div>
          <div className='icon-chevron-left-2'>
            <div className='chevron-left-thin-3' />
          </div>
          <span className='title'>Title</span>
        </div>
        <div className='pasted-graphic' />
      </div>
      <div className='flex-row-be'>
        <div className='card'>
          <div className='flex-row-aa'>
            <div className='line' />
            <div className='line-4' />
            <div className='sksks' />
            <div className='sksks-5' />
            <div className='group'>
              <div className='sksks-6' />
              <div className='ellipse' />
              <div className='check'>
                <div className='check-7' />
              </div>
            </div>
            <div className='line-8' />
            <div className='line-9' />
            <div className='sks' />
            <div className='sks-a' />
            <div className='line-b' />
            <div className='line-c' />
            <div className='public' />
            <div className='sks-d' />
          </div>
          <span className='completed'>적립이 완료되었습니다!</span>
        </div>
        <div className='regroup'>
          <span className='bus-stop-location'>정류장 위치</span>
          <span className='trash-can'>
            경기대수원캠퍼스 입구
            <br />제 2 쓰레기통
          </span>
        </div>
        <span className='links'>Links</span>
        <div className='urls'>
          <span className='website'>website.net</span>
          <span className='mylink-net'>mylink.net</span>
          <span className='yourlink-net'>yourlink.net</span>
          <div className='add-links'>
            <div className='icon-add' />
            <span className='add-link'>Add link</span>
          </div>
        </div>
      </div>
      <div className='flex-row'>
        <span className='date'>날짜</span>
        <span className='date-time'>2024.6.4 (화) 09:41 </span>
      </div>
      <div className='flex-row-eec'>
        <span className='type'>종류</span>
        <span className='plastic-small'>플라스틱 (소형)</span>
      </div>
      <div className='flex-row-c'>
        <span className='weight'>무게</span>
        <span className='weight-g'>387 g</span>
      </div>
      <div className='flex-row-ee'>
        <span className='accumulation-amount'>적립금액</span>
        <span className='won'>48 원</span>
      </div>
      <div className='flex-row-cf'>
        <span className='holding-amount'>보유금액</span>
        <span className='comma-won'>10,871 원</span>
      </div>
      <div className='flex-row-cd'>
        <span className='remaining-times'>남은 횟수</span>
        <span className='times-limit'>7 / 10 (회)</span>
        <span className='daily-limit'>* 일일 최대 한도는 10회입니다.</span>
      </div>
      <button className='button'>
        <span className='go-home'>홈으로 돌아가기</span>
      </button>
      <div className='home-indicator' />
    </div>
  );
}
