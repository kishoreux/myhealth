// SlideRoutes.js
import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import SymptomChecker from '../pages/SymptomChecker/SymptomChecker';
import ScheduleAppointment from '../pages/ScheduleAppointment';
import SuccessSchedule from '../pages/SuccessSchedule';
import SplashScreen from '../pages/SplashScreen';

function SlideRoutes() {
  const location = useLocation();

  const routes = useRoutes([
    { path: "/", element: <SplashScreen /> },
    { path: "login", element: <Login /> },
    { path: "landing", element: <Landing /> },
    { path: "symptomchecker", element: <SymptomChecker /> },
    { path: "scheduleappointment", element: <ScheduleAppointment /> },
    { path: "successschedule", element: <SuccessSchedule /> },
  ]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="slide"
      >
        <div>{routes}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default SlideRoutes;
