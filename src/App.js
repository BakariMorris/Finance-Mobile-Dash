import MainContainer from './hoc/MainContainer/MainContainer.js';
import Header from './components/Header/Header.js';
import Wrapper from './hoc/Wrapper/Wrapper.js';
import LeftSide from './components/LeftSide/LeftSide.js';
import UserCard1 from './components/UserCards/UserCard1.js';
import UserCard2 from './components/UserCards/UserCard2.js';

import './App.scss';

function App() {
  return (
    <Wrapper>
      <LeftSide/>
      <MainContainer>
        <Header/>
        <UserCard1/>
        <UserCard2/>
      </MainContainer>
    </Wrapper>
  );
}

export default App;
