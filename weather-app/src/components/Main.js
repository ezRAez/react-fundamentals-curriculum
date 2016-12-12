import React                   from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Main(props) {
  return (
    <div className="col-md-12 jumbotron text-center main-container">
      {props.children}
    </div>
  );
};

export default Main;
// <ReactCSSTransitionGroup
//   transitionName="appear"
//   transitionEnterTimeout={500}
//   transitionLeaveTimeout={500}>
//   {React.cloneElement(props.children, {key: props.location.pathname})}
// </ReactCSSTransitionGroup>
