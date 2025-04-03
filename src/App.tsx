import { useCallback, useEffect, useState } from '@lynx-js/react';
import './App.css';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';
import { useNavigate } from 'react-router';
export function App() {
  const [alterLogo, setAlterLogo] = useState(false);
  const nav = useNavigate();

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <view className="Title">
            <text>Emin trying to make a new app</text>
            <text style="font-size:20px;" bindtap={() => nav('/home')}>
              Let's go to home
            </text>
            <text style="font-size:20px;" bindtap={() => nav('/product')}>
              Let's go to product
            </text>
          </view>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}
