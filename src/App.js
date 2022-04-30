import './App.css';
import Container from 'react-bootstrap/Container';
// import Header from './components/sideBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import SideBar from './components/sideBar/Sidebar';
import HomePage from './components/pages/homePage/homePage';
import { Component } from 'react';
import FaceLife from './components/pages/faceLife/FaceLife';
import ReplacementHeads from './components/pages/replacementHeads/ReplacementHeads';
import Ascendance from './components/pages/ascendance/Ascendance';
import MainPage from './components/pages/mainPage/MainPage';

const initialState = {
  route: 'main'
}

class App extends Component {

  constructor(props){
    super(props);
    this.state= initialState;

    document.title = `Khizer Mahboob - Programmer`;
  }

  onRouteChange = (route) => {
    // if (route === 'home'){
    //   this.setState(initialState);
    // } 
    // else if (route === 'facelife'){
    //   this.setState({isSignedIn : true})
    // }

    this.setState({route: route});
  }

  getBody(){
    const {route} = this.state;

    switch (route) {
      case 'main':
        return <MainPage/>;
        break;
      case 'aboutMe':
        return <HomePage/>;
        break;
      case 'replacementHeads':
        return <ReplacementHeads/>;
        break;
      case 'faceLife':
        return <FaceLife/>;
        break;
      case 'ascendance':
        return <Ascendance/>;
        break;
      case 'zedFighter':
        return <HomePage/>;
        break;
      case 'projects':
          return <HomePage/>;
          break;

      default:
        return <HomePage/>;
        break;
    }
  }

  render(){
    return (
      <div className="App">

        {/* <Header/> */}
        <SideBar onRouteChange={this.onRouteChange}/>

        <div id='mainBody'>
          <Container id='contain'>

            {this.getBody()}
            
          </Container>
        </div>
        
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
