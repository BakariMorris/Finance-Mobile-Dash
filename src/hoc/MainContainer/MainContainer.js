import './MainContainer.scss';

const MainContainer = props => {
  return (
    <div class="main-container">
      {props.children}
    </div>
  );
}

export default MainContainer;
