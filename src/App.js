// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language:"EN",
      headerColor: 'transparent'
    }
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang = (lang) => {this.setState({language:lang}) };


  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenScrollEvent);
  //   console.log("Listening scroll");
  // }

  render() {
    return (
      <div className="App">
            <Header changeLang={this.changeLang} language={this.state.language}/>
            <Home language={this.state.language} />
            <About language={this.state.language} />
            <Services language={this.state.language} />
            <Contact language={this.state.language} />
            <Footer language={this.state.language} />
      </div>
    );
  }
}

export default App;
