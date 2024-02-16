import '../App.css';
import '../index.css'
import Feature from './layout/Feature';
import Contents from './layout/Contents';
import Mention from './layout/Mention';
import Price from './layout/Price';
import Flow from './layout/Flow';
import Voice from './layout/Voice';
import Team from './layout/Team';
export default function Main() {
  return (
    <main>
      {/* <Feature/> */}
      <Mention/>
      <Flow/>
      {/* <Contents/> */}
      <Team/>
      <Voice/>
      <Price/>
  
    </main>
  )
}