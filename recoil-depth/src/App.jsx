import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalnotificationSelector } from './store/atoms/atoms'

// Summary:
// useMemo: For calculations inside a component.
// memo: For components to prevent unnecessary re-renders.

function App() {
  return(
  <RecoilRoot>
    <Buttons/>
  </RecoilRoot>
)}

function Buttons(){
  const NetworkAtom = useRecoilValue(networkAtom);
  const JobsAtom = useRecoilValue(jobsAtom);
  const [MessagingAtom, setMessagingAtom] = useRecoilState(messagingAtom);
  const NotificationAtom = useRecoilValue(notificationsAtom);
  const totoalnotficitaioncount = useRecoilValue(totalnotificationSelector);
  return (
    <div>
      <button>Home</button>
      <button>My Network({NetworkAtom >=100 ? "99+" : NetworkAtom})</button>
      <button>Jobs({JobsAtom})</button>
      <button>Messaging({MessagingAtom})</button>
      <button>Notifications({NotificationAtom})</button>
      <button onClick={()=>setMessagingAtom(prevmessage=>prevmessage+1)}>Me ({totoalnotficitaioncount})</button>
    </div>
  )
}

export default App
