import MainContainer from './hoc/MainContainer/MainContainer.js';
import Header from './components/Header/Header.js';
import Wrapper from './hoc/Wrapper/Wrapper.js';

import './App.scss';

function App() {
  return (
    <Wrapper>
      <MainContainer>
        <Header></Header>
      </MainContainer>
    </Wrapper>
  );
}

export default App;
