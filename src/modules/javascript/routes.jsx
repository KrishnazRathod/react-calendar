
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ES6Features from './ES6Features';
import DOMEvents from './DOMEvents';
import BrowserAPIs from './BrowserAPIs';
import DOMandBOM from './DOMandBOM';
import HoistingTDZ from './HoistingTDZ';
import LetVarConst from './LetVarConst';
import Closures from './Closures';
import CallBindApply from './CallBindApply';
import Promises from './Promises';
import AsyncAwait from './AsyncAwait';
import MapFilterReduce from './MapFilterReduce';
import PromiseRaceVsAny from './PromiseRaceVsAny';
import SliceVsSplice from './SliceVsSplice';
import LoopComparison from './LoopComparison';
import RestVsSpread from './RestVsSpread';
import ThisKeyword from './ThisKeyword';
import NullVsUndefined from './NullVsUndefined';
import DataTypes from './DataTypes';
import WhatIsJavaScript from './WhatIsJavaScript';
import IIFE from './IIFE';
import SetTimeoutVsSetInterval from './SetTimeoutVsSetInterval';
import HigherOrderFunction from './HigherOrderFunction';
import PrototypeChaining from './PrototypeChaining';
import PromiseTry from './PromiseTry';
import Iterator from './Iterator';
import ObjectProperties from './ObjectProperties';

export const JavaScriptRoutes = () => {
    return (
        <Routes>
            <Route path="es6" element={<ES6Features />} />
            <Route path="hoisting-tdz" element={<HoistingTDZ />} />
            <Route path="let-var-const" element={<LetVarConst />} />
            <Route path="closures" element={<Closures />} />
            <Route path="call-bind-apply" element={<CallBindApply />} />
            <Route path="promises" element={<Promises />} />
            <Route path="async-await" element={<AsyncAwait />} />
            <Route path="map-filter-reduce" element={<MapFilterReduce />} />
            <Route path="promise-race-vs-any" element={<PromiseRaceVsAny />} />
            <Route path="slice-vs-splice" element={<SliceVsSplice />} />
            <Route path="loop-comparison" element={<LoopComparison />} />
            <Route path="rest-vs-spread" element={<RestVsSpread />} />
            <Route path="this-keyword" element={<ThisKeyword />} />
            <Route path="null-vs-undefined" element={<NullVsUndefined />} />
            <Route path="data-types" element={<DataTypes />} />
            <Route path="what-is-javascript" element={<WhatIsJavaScript />} />
            <Route path="iife" element={<IIFE />} />
            <Route path="settimeout-vs-setinterval" element={<SetTimeoutVsSetInterval />} />
            <Route path="dom-and-bom" element={<DOMandBOM />} />
            <Route path="higher-order-function" element={<HigherOrderFunction />} />
            <Route path="prototype-chaining" element={<PrototypeChaining />} />
            <Route path="promise-try" element={<PromiseTry />} />
            <Route path="iterator" element={<Iterator />} />
            <Route path="object-properties" element={<ObjectProperties />} />
            <Route path="dom-events" element={<DOMEvents />} />
            <Route path="browser-apis" element={<BrowserAPIs />} />
        </Routes>
    );
};
