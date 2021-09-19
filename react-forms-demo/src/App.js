import React, { Component } from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personGoing: true,
            numberOfPersons: 5
        };
        this.handleInputChange = this.handleInputChange.bind(this);
   }
   handleInputChange(event) {
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;
       this.setState({
           [name]: value
       });
  }
  render() {
      return (
          <form>
              <h1>Multiple Input Controlled Form Example</h1>
              <label>
                  Is Person going:
                  <input
                    name="personGoing"
                    type="checkbox"
                    checked={this.state.personGoing}
                    onChange={this.handleInputChange} />
             </label>
             <br />
             <label>
                 Number of persons:
                 <input
                 name="numberOfPersons"
                 type="number"
                 value={this.state.numberOfPersons}
                 onChange={this.handleInputChange} />
             </label>
         </form>
     );
  }
}
export default App;
//import React, { Component } from 'react';
//class App extends React.Component {
//  constructor(props) {
//      super(props);
//      this.state = {value: ''};
//      this.handleChange = this.handleChange.bind(this);
//      this.handleSubmit = this.handleSubmit.bind(this);
//  }
//  handleChange(event) {
//      this.setState({value: event.target.value});
//  }
//  handleSubmit(event) {
//      alert('You have submitted the input successfully: ' + this.state.value);
//      event.preventDefault();
//  }
//  render() {
//      return (
//          <form onSubmit={this.handleSubmit}>
//            <h1>Controlled Form Example</h1>
//            <label>
//                Name:
//                <input type="text" value={this.state.value} onChange={this.handleChange} />
//            </label>
//            <input type="submit" value="Submit" />
//         </form>
//      );
//  }
//}
//export default App;
//
////import React, { Component } from 'react';
////class App extends React.Component {
////  constructor(props) {
////      super(props);
////      this.updateSubmit = this.updateSubmit.bind(this);
////      this.input = React.createRef();
////  }
////  updateSubmit(event) {
////      alert('You have entered the UserName and CompanyName successfully.');
////      event.preventDefault();
////  }
////  render() {
////    return (
////      <form onSubmit={this.updateSubmit}>
////        <h1>Uncontrolled Form Example</h1>
////        <label>Name:
////            <input type="text" ref={this.input} />
////        </label>
////        <label>
////            CompanyName:
////            <input type="text" ref={this.input} />
////        </label>
////        <input type="submit" value="Submit" />
////      </form>
////    );
////  }
////}
////export default App;