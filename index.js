

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

