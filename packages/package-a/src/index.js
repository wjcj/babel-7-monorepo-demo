import React from 'react';

var a = () => console.log(1);

a();

const double = [1, 2, 3].map(num => num * 2);
double();

const App = () => <div></div>;

export default App;

// <div></div>;
// <h1>hi</h1>;
// <Component/>;
// <Component {...props} />;
// <Component {...props} prop="a"/>;
// <Component prop="a" key="b" />;

// const profile = (
//   <>
//     <img src="avatar.png" className="profile" />
//     <h3>{[user.firstName, user.lastName].join(" ")}</h3>
//   </>
// );