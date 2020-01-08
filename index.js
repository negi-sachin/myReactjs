



//-------------------------Displaying hw-----------------------------------------------
// ReactDOM.render(
 
//   <h1>Hello, sachin!</h1>,
//     document.getElementById('root')
//   );
  
  

//-------------------------------JSX---------------------------------------
//   const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//You can put any valid JavaScript expression inside the curly braces in JSX.
// For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

//JSX is an Expression Too
//This means that you can use JSX inside of if statements and for loops, assign it to variables, 
//accept it as arguments, and return it from functions
//return <h1>Hello, {user}</h1>;


//Specifying Attributes with JSX
//quotes to specify string literals as attributes:- element = <div tabIndex="0"></div>;
//use curly braces to embed a JavaScript expression in an attribute:-element = <img src={user.avatarUrl}></img>;
//You should either use quotes (for string values) 
//or curly braces (for expressions), but not both in the same attribute.

//Specifying Children with JSX
//Valid ok
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

//React.createElement
// Below two code are same

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

//-----------------------------------------------------------ReactDom--------------------------------------------------------------
// Updating DOM

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

//count to 5 

// var i=0;
// var ele="nothing";
// function show(){
  
    
//       console.log(++i);
//      ele=<h1>{i}</h1>
//      ReactDOM.render(ele,document.getElementById('root'));
//      if(i==5) clearInterval(inte);
    
  
 
  

// }
// var inte=setInterval(show,1000);


//------------------------------------------------Components and props-----------------------------------------------------
//Previously, we only encountered React elements that represent DOM tags: const element = <div />
//elements can also represent user-defined components like-const element = <Welcome name="Sara" />
//When React sees an element representing a user-defined component, 
//it passes JSX attributes to this component as a single object. We call this object “props”.
//also a same named function is called . eg Welcome()
//There are wo types of component:
//1.Stateless Functional Component
//2. Statefull Class Component

//will display "hello,sara"

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//FLow:-
// we call ReactDOM.render() with the <Welcome name="Sara" /> element.
// React calls the Welcome component with {name: 'Sara'} as the props.
// Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

//Note: Always start component names with a capital letter like welcome

// Another example
// function Age(props){
//   return <b><i>{props.age}</i></b>
// }

// const ele=<Age name="sam" age="19"/>
// ReactDOM.render(ele,document.getElementById('root'))

//-------------------------------------Composing component-----------------------------------

//Components can refer to other components in their output.

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );


//-------------------------------------------------------------------State and Lifecycles---------------------------------------------------
////--------------------------------------------------------------------STATE---------------------------------------------------------------

//Consider this clock example :-

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

  //In this section, we will learn how to make the Clock component truly reusable and encapsulated with all other function working fine

//   function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

//Now we will use class to make it more reusable and encapsulated
//we need to add “state” to the Clock component
//State is similar to props, but it is private and fully controlled by the component

//STEPS:
// Create an ES6 class, with the same name, that extends React.Component.

// Add a single empty method to it called render().

// Move the body of the function into the render() method.

// Replace props with this.props in the render() body.

// Delete the remaining empty function declaration.

// class Clock extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

  //-----------------Adding Local State to a Class-----------------

  // 1.Replace this.props.date with this.state.date in the render() method:
  //2.Add a class constructor that assigns the initial this.state:
  //3.Remove the date prop from the <Clock /> element:
//   class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );

//updating is disabling for now ,we will see it next.  
//now we use <Clock/> as many times as we can .


//-----------------------------------------------------------------Lifecycle Methods--------------------------------------------------------------

// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React. i.e componentDidMount() 
// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.i.e   componentWillUnmount()
//These both are reserved keyword for mount and unmount funcs
// We can declare special methods on the component class to run some code when a component mounts and unmounts:
//These methods are called “lifecycle methods”.

//The componentDidMount() method runs after the component output has been rendered to the DOM. 
//This is a good place to set up a timer:

// componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//this.timerID is manually made by me to store what setinterval returned

// this.timerID is used Here
// componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

// Finally, we will implement a method called tick() that the Clock component will run every second.

// It will use this.setState() to schedule updates to the component local state:

// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
//Explanation:-
// When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

// React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.

// When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

// Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

// If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.


//Another example

// class Show extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             i:0,
//             date:new Date()
//         }
//     }
   
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//           );
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick(){
//         this.state.i++;
//         this.setState({
        
//             date:new Date()
//         })
//     }

//     render(){
//         return(
//             <div>
//             <h1>I value is: {this.state.i}</h1>
//             <h3>DAte is {this.state.date.toLocaleTimeString()}</h3>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<Show />,document.getElementById('root'))



//--------------------------------------------------------Handling Events---------------------------------------------------------------------
//Points:-
// 1. React events are named using camelCase, rather than lowercase.
// 2. With JSX you pass a function as the event handler(onclick={doSomething}), rather than a string(onclick="dosomething()")

//Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. 
//For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

{/* <a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

In React, this could instead be:
function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>//"onClick" shud be CAmel Cased
        Click me
      </a>
    );
  } */}

//   When you define a component(</Toggle>) using an ES6 class, a common pattern is for an event handler({doSommething}) to be a method on the class.
//    For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

  
// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // This binding is necessary to make `this` work in the callback
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(state => ({
//         isToggleOn: !state.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );

  //You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default.
   //If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

  //This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, 
//  such as onClick={this.handleClick}, you should bind that method.

//If calling bind annoys you then two other methods are here at : https://reactjs.org/docs/handling-events.html




//----------------------------------------------Conditional Rendering-----------------------------------------------------

//In React, you can create distinct components that encapsulate behavior you need. 
//Then, you can render only some of them, depending on the state of your application.

// Conditional rendering in React works the same way conditions work in JavaScript.
//  Use JavaScript operators like if or the conditional operator to create elements representing the current state,
//  and let React update the UI to match them.

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

//We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );


//----------------------Element Variables---------------------

//You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// //It will render either <LoginButton /> or <LogoutButton /> depending on its current state. 
// //It will also render a <Greeting /> from the previous example:

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );


//________________inline logical syntax____________________

// few valid code
//1.
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

// It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

// Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.


//2.

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }

//----------------------------------------------------------------------Lists and keys----------------------------------------------------------------

//--List--

//Tranforming Array to Lists,also performing some operations on it

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

//REndering Multi componenets
//You can build collections of elements[1,2,,4,56] and include them in JSX using curly braces {}.
//Below, we loop through the numbers array using the JavaScript map() function. We return a <li> element for each item. 
//Finally, we assign the resulting array of elements to listItems:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

//We can refactor the previous example into a component that accepts an array of numbers and outputs a list of elements.

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

//on running above code ,we will get an "key "error" .so we add an key

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );


// internity ques to make a nav bar

// class Buttons extends React.Component{

//   constructor(props) {
//     super(props);
//     this.Home = this.Home.bind(this);
//     this.photo = this.photo.bind(this);
//     this.video = this.video.bind(this);
//   }
 
//    Home(e) {
//     e.preventDefault();
//     ReactDOM.render(<h1>This is Home</h1>,document.getElementById('app'));
//   }

//   photo(e) {
//     e.preventDefault();
//     ReactDOM.render(<h1>This is photo</h1>,document.getElementById('app'));
//   }

//   video(e) {
//     e.preventDefault();
//     ReactDOM.render(<h1>This is Video</h1>,document.getElementById('app'));
//   }

 
//   render(){
//     return(<div>
//       <button onClick={this.Home}>
//         Home
//       </button>
//       <button onClick={this.photo}>
//         PHOTOS
//       </button>
//       <button onClick={this.video}>
//         Videos
//       </button>
//     </div>)
//   }
// }






// ReactDOM.render(<Buttons/>,document.getElementById('root'));

//-------------------------------------------------FORMS----------------------------------------------------

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Write here boi'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    this.setState({value: event.target.value.toUpperCase()});
    console.log(this.state.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <input type="file" id="input"></input>
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);