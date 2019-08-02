import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
                    isPoppedOut: true,
                    gitURL: '',

                 };
  }

  onChangeHandler = (e) =>
  {
        e.preventDefault();
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
  }

  openNetlifyPopup = () => {
    var windowObjectReference = window.open(
      "https://app.netlify.com/start/deploy?repository=" + this.state.gitURL,
      "DescriptiveWindowName",
      "top=150,left=500,height=500,width=500,resizable,scrollbars,status"
    );
  }

  openHerokuPopup = () =>
  {
    var windowObjectReference = window.open(
      "https://heroku.com/deploy?template=" + this.state.gitURL,
      "DescriptiveWindowName",
      "top=150,left=500,height=500,width=500,resizable,scrollbars,status"
    );
  }
  openZeitPopup = () =>
  {
    var windowObjectReference = window.open(
      "https://deploy.now.sh/?repo=" + this.state.gitURL,
      "DescriptiveWindowName",
      "top=150,left=500,height=500,width=500,resizable,scrollbars,status"
    );
  }

  render(){
    return(
<div className='container'>
<Row>
<Col md='12' className='margin'>
<h2>Deploy to Netlify and Heroku</h2>
</Col>
</Row>
<Row>
<Col md='9' className='margin'>
<div>Enter Git repo URL below and click any button to deploy</div><br/>
<InputGroup>
<InputGroupAddon addonType="prepend">URL to a GitHub repo</InputGroupAddon>
<Input onChange={this.onChangeHandler} name='gitURL' placeholder='https://github.com/username/project_name' />
</InputGroup>
</Col>
</Row>
<br/>
<Row>
  <Col md='3' className='margin margin-left'>
  <div onClick={this.openNetlifyPopup}>
  <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" className='pointer' />
</div>
  </Col>
  <Col md='3' className='margin'>
  <div onClick={this.openHerokuPopup}>
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"  className='pointer' />
</div>
  </Col>
  {/* <Col md='2' className='margin'>
  <div onClick={this.openZeitPopup}>
  <img src="https://deploy.now.sh/static/button.svg" alt="Deploy to Zeit" className='pointer' />
</div>
  </Col> */}
</Row>
<Row>
<Col md='10'>
<br /><br /><br /><b>Note: </b><br /><br /><p>In case of Heroku deployment, add <code>app.json</code> file in the root of your Git repo and modify <code>package.json</code> file accordingly. Check this <a href="https://github.com/heroku/node-js-sample" target='_blank'>sample git repo</a> for details.</p>
{/* <p>2. In case of Now deployment, add <code>now.json</code> file in the root of your Git repo, read more about it <a href="https://zeit.co/docs/v2/advanced/configuration">here</a></p> */}

</Col>
</Row>



</div>
    )
}
}

export default App;