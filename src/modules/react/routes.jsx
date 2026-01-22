import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WhatIsReact from './WhatIsReact';
import StateAndProps from './StateAndProps';
import PropDrilling from './PropDrilling';
import ParentChildCommunication from './ParentChildCommunication';
import AvoidReRendering from './AvoidReRendering';
import UseMemoVsUseCallback from './UseMemoVsUseCallback';
import VirtualDOM from './VirtualDOM';
import ClassVsFunctionComponent from './ClassVsFunctionComponent';
import ControlledVsUncontrolled from './ControlledVsUncontrolled';
import UseReducerVsUseState from './UseReducerVsUseState';
import ReactHooks from './ReactHooks';
import PureComponents from './PureComponents';
import ReactPortal from './ReactPortal';
import ReactSuspense from './ReactSuspense';
import StrictMode from './StrictMode';
import LazyLoading from './LazyLoading';
import Reconciliation from './Reconciliation';
import Redux from './Redux';
import SyntheticEvents from './SyntheticEvents';
import HOC from './HOC';
import UseEffectVsUseLayoutEffect from './UseEffectVsUseLayoutEffect';
import UseEffectVsUseCallback from './UseEffectVsUseCallback';
import FormValidation from './FormValidation';
import ReactFiber from './ReactFiber';
import ServerSideRendering from './ServerSideRendering';
import LifecycleMethods from './LifecycleMethods';
import ReactFundamentals from './ReactFundamentals';
import AdvancedHooks from './AdvancedHooks';
import StateManagement from './StateManagement';
import PerformanceOptimization from './PerformanceOptimization';
import ReactRouter from './ReactRouter';
import FormHandling from './FormHandling';

export const ReactRoutes = () => {
    return (
        <Routes>
            <Route path="what-is-react" element={<WhatIsReact />} />
            <Route path="state-and-props" element={<StateAndProps />} />
            <Route path="lifecycle-methods" element={<LifecycleMethods />} />
            <Route path="prop-drilling" element={<PropDrilling />} />
            <Route path="parent-child-communication" element={<ParentChildCommunication />} />
            <Route path="avoid-rerendering" element={<AvoidReRendering />} />
            <Route path="usememo-vs-usecallback" element={<UseMemoVsUseCallback />} />
            <Route path="virtual-dom" element={<VirtualDOM />} />
            <Route path="class-vs-function" element={<ClassVsFunctionComponent />} />
            <Route path="controlled-vs-uncontrolled" element={<ControlledVsUncontrolled />} />
            <Route path="usereducer-vs-usestate" element={<UseReducerVsUseState />} />
            <Route path="react-hooks" element={<ReactHooks />} />
            <Route path="pure-components" element={<PureComponents />} />
            <Route path="react-portal" element={<ReactPortal />} />
            <Route path="react-suspense" element={<ReactSuspense />} />
            <Route path="strict-mode" element={<StrictMode />} />
            <Route path="lazy-loading" element={<LazyLoading />} />
            <Route path="reconciliation" element={<Reconciliation />} />
            <Route path="redux" element={<Redux />} />
            <Route path="synthetic-events" element={<SyntheticEvents />} />
            <Route path="hoc" element={<HOC />} />
            <Route path="useeffect-vs-uselayouteffect" element={<UseEffectVsUseLayoutEffect />} />
            <Route path="useeffect-vs-usecallback" element={<UseEffectVsUseCallback />} />
            <Route path="form-validation" element={<FormValidation />} />
            <Route path="react-fiber" element={<ReactFiber />} />
            <Route path="server-side-rendering" element={<ServerSideRendering />} />
            <Route path="fundamentals" element={<ReactFundamentals />} />
            <Route path="hooks" element={<AdvancedHooks />} />
            <Route path="state" element={<StateManagement />} />
            <Route path="performance" element={<PerformanceOptimization />} />
            <Route path="router" element={<ReactRouter />} />
            <Route path="forms" element={<FormHandling />} />
        </Routes>
    );
};


