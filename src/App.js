import "./App.css";
// import Greet, { Morning } from "./components/ToExplainDefaultAndNamedExport";
// import ToExplainJsx from "./components/ToExplainJsx";
// import SuperHero from "./components/ToExplainPropsInFunctionComponents";
// import SuperHero from "./components/ToExplainPropsInClassComponents";
// import ExplainState from "./components/ToExplainStateInClassComponents";
// import Counter from "./components/ToExplainsetStateInClassComponents";
// import EventHandling from "./components/ToExplainEventHandling";
// import ExplainEventBinding from "./components/ToExplainHowToBindEventHandlers";
// import ParentComponent from "./components/ParentComponent";
// import ToExplainConditionalRendering from "./components/ToExplainConditionalRendering"
// import ToExplainStylingReactComponents from "./components/ToExplainStylingReactComponents";
// import LifeCycleParentComponent from "./components/LifeCycleParentComponent";
// import ToExplainReactFragments from './components/ToExplainReactFragments'
// import TableComponent from './components/TableComponent'
// import ToExplainPureComponents from './components/ToExplainPureComponents'
// import ToExplainRefs from "./components/RefsInClassComponents/ToExplainRefs";
// import ParentClass from './components/RefsInClassComponents/ParentClass'
// import ParentClass from "./components/ForwardRefInReact/ParentClass";
// import ToExplainPortals from "./components/PortalsInReact.js/ToExplainPortals";
// import ParentClass from "./components/ErrorBoundary/ParentClass";
// import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
// import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
// import ClickCounter from "./components/RenderProps/ClickCounter";
// import Counter from "./components/RenderProps/Counter";
// import HoverCounter from "./components/RenderProps/HoverCounter";
// import User from "./components/RenderProps/User";
// import ComponentC from "./components/ContextInReact/ComponentC";
// import { UserProvider } from "./components/ContextInReact/userContext";
// import PostsList from "./components/AxiosInReact/PostsList";
// import PostForm from "./components/AxiosInReact/PostForm";
// import ToExplainuseStateHook from "./components/HooksInReact/FilesRelatedTouseStateHook/ToExplainuseStateHook";
// import ToExplainuseStateHookWithObject from "./components/HooksInReact/FilesRelatedTouseStateHook/ToExplainuseStateHookWithObject"
// import ToExplainusestateHookWithArray from "./components/HooksInReact/FilesRelatedTouseStateHook/ToExplainusestateHookWithArray";
// import ToExplainuseEffectHook from "./components/HooksInReact/FilesRelatedTouseEffectHook/ToExplainuseEffectHook"
// import ConditionallyRunuseEffect from "./components/HooksInReact/FilesRelatedTouseEffectHook/ConditionallyRunuseEffect"
// import RunuseEffectOnlyOnce from "./components/HooksInReact/FilesRelatedTouseEffectHook/RunuseEffectOnlyOnce";
// import ToExplainuseEffectWithCleanup from "./components/HooksInReact/FilesRelatedTouseEffectHook/ToExplainuseEffectWithCleanup";
// import IntervaluseEffectCounter from "./components/HooksInReact/FilesRelatedTouseEffectHook/IntervaluseEffectCounter";
// import DataFetchingUsingHooks from "./components/HooksInReact/DataFetchingUsingHooks";
// import FetchDataOnButtonClick from "./components/HooksInReact/FetchDataOnButtonClick";
// import {
//   UserContext,
//   ChannelContext,
// } from "./components/HooksInReact/FilesRelatedTouseContextHook/Contexts";
// import ComponentC from "./components/HooksInReact/FilesRelatedTouseContextHook/ComponentC";
// import ToExplainuseReducerHook from "./components/HooksInReact/FilesRelatedTouseReducerHook/ToExplainuseReducerHook";
// import ToExplainuseReducerHookWithObjects from "./components/HooksInReact/FilesRelatedTouseReducerHook/ToExplainuseReducerHookWithObjects";
// import ToExplainMuitipleuseReducerHooks from "./components/HooksInReact/FilesRelatedTouseReducerHook/ToExplainMuitipleuseReducerHooks";

// import ComponentA from "./components/HooksInReact/FilesForuseReducerWithuseContext/ComponentA";
// import ComponentB from "./components/HooksInReact/FilesForuseReducerWithuseContext/ComponentB";
// import ComponentC from "./components/HooksInReact/FilesForuseReducerWithuseContext/ComponentC";
// import React, { useReducer } from "react";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// import FetchDataUsinguseReducerAnduseEffectHooks from "./components/HooksInReact/FilesRelatedTouseReducerHook/FetchDataUsinguseReducerAnduseEffectHooks";

// import ToExplainuseCallbackHook from "./components/HooksInReact/FilesRelatedTouseCallbackHook/ToExplainuseCallbackHook";

// import ToExplainuseMemoHook from "./components/HooksInReact/FilesRelatedTouseMemoHook/ToExplainuseMemoHook";

// import ToExplainuseRefHook from "./components/HooksInReact/FilesRelatedTouseRefHook/ToExplainuseRefHook";

// import ToExplainuseRefHookToStoreMutableValue from "./components/HooksInReact/FilesRelatedTouseRefHook/ToExplainuseRefHookToStoreMutableValue";

// import DocTitleOne from "./components/HooksInReact/FilesRelatedToCustomHook/CustomHookExample1/DocTitleOne";
// import DocTitleTwo from "./components/HooksInReact/FilesRelatedToCustomHook/CustomHookExample1/DocTitleTwo";

// import CounterOne from "./components/HooksInReact/FilesRelatedToCustomHook/CustomHookExample2/CounterOne";
// import CounterTwo from "./components/HooksInReact/FilesRelatedToCustomHook/CustomHookExample2/CounterTwo";

// import UserForm from "./components/HooksInReact/FilesRelatedToCustomHook/CustomHookExample3/UserForm";

// import RenderingConceptWRTuseState from "./components/ReactRenderConcepts/RenderingConceptWRTuseState";

// import RenderingConceptWRTuseReducer from "./components/ReactRenderConcepts/RenderingWRTPrimitiveTypeAsState/RenderingConceptWRTuseReducer";

// import ObjectAsState from "./components/ReactRenderConcepts/RenderingWRTObjectOrArrayAsState/ObjectAsState";
// import ArrayAsState from "./components/ReactRenderConcepts/RenderingWRTObjectOrArrayAsState/ArrayAsState";

// import Parent from "./components/ReactRenderConcepts/ParentChildRender/Parent";

// import OptParent from "./components/ReactRenderConcepts/RenderingOptimizations/OptimizationByUsingSameElementReferenceTechnique/OptParent";
// import Child from "./components/ReactRenderConcepts/RenderingOptimizations/OptimizationByUsingSameElementReferenceTechnique/Child";

// import GrandParent from "./components/ReactRenderConcepts/RenderingOptimizations/OptimizationByUsingSameElementReferenceTechnique/GrandParent";

// import Parent from "./components/ReactRenderConcepts/RenderingOptimizations/OptimizationUsingReactmemo/Parent";

// import Parent from "./components/ReactRenderConcepts/IncorrectRenderingOptimizationsUsingReactmemo/UseCaseA/Parent";

// import Parent from "./components/ReactRenderConcepts/IncorrectRenderingOptimizationsUsingReactmemo/UseCaseB/Parent";

// import Parent from "./components/ReactRenderConcepts/IncorrectRenderingOptimizationsUsingReactmemo/UseCaseC/Parent";

import Parent from "./components/ReactRenderConcepts/ReactContextAndRender/Parent";
// import ChildA from "./components/ReactRenderConcepts/ReactContextAndRender/ChildA";

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >

    <div className="App">
      {/* <Greet /> */}

      {/* <Morning /> */}

      {/* <ToExplainJsx /> */}

      {/* <SuperHero name="Bruce" heroName="Batman">
        <p>This is a children prop</p>
        <h3>this is there as well</h3>
      </SuperHero>
      <SuperHero name="Clark" heroName="Superman">
        <button>Action</button>
      </SuperHero>
      <SuperHero name="Diana" heroName="Wonder woman" /> */}

      {/* <SuperHero name="Bruce" heroName="Batman" />
      <SuperHero name="Clark" heroName="Superman" />
      <SuperHero name="Diana" heroName="Wonder woman" /> */}

      {/* <ExplainState /> */}

      {/* <Counter /> */}

      {/* <EventHandling /> */}

      {/* <ExplainEventBinding /> */}

      {/* <ParentComponent /> */}

      {/* <ToExplainConditionalRendering /> */}

      {/* <ToExplainStylingReactComponents /> */}

      {/* <LifeCycleParentComponent /> */}

      {/* <ToExplainReactFragments /> */}

      {/* <TableComponent /> */}

      {/* <ToExplainPureComponents /> */}

      {/* <ToExplainRefs /> */}

      {/* <ParentClass /> */}

      {/* <ToExplainPortals /> */}

      {/* <ParentClass /> */}

      {/* <ClickCounter name="Jana" />
      <HoverCounter /> */}

      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Jana" : "Guest")} /> */}

      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* <UserProvider value="Jana">
        <ComponentC />
      </UserProvider> */}

      {/* <PostsList /> */}

      {/* <PostForm /> */}

      {/* <ToExplainuseStateHook /> */}

      {/* <ToExplainuseStateHookWithObject /> */}

      {/* <ToExplainusestateHookWithArray /> */}

      {/* <ToExplainuseEffectHook /> */}

      {/* <ConditionallyRunuseEffect /> */}

      {/* <RunuseEffectOnlyOnce /> */}

      {/* <ToExplainuseEffectWithCleanup /> */}

      {/* <IntervaluseEffectCounter /> */}

      {/* <DataFetchingUsingHooks /> */}

      {/* <FetchDataOnButtonClick /> */}

      {/* <UserContext.Provider value="Jana">
        <ChannelContext.Provider value="Learn coding with Jana">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <ToExplainuseReducerHook /> */}

      {/* <ToExplainuseReducerHookWithObjects /> */}

      {/* <ToExplainMuitipleuseReducerHooks /> */}

      {/* Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}

      {/* <FetchDataUsinguseReducerAnduseEffectHooks /> */}

      {/* <ToExplainuseCallbackHook /> */}

      {/* <ToExplainuseMemoHook /> */}

      {/* <ToExplainuseRefHook /> */}

      {/* <ToExplainuseRefHookToStoreMutableValue /> */}

      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      {/* <CounterOne />
      <CounterTwo /> */}

      {/* <UserForm /> */}

      {/* <RenderingConceptWRTuseState /> */}

      {/* <RenderingConceptWRTuseReducer /> */}

      {/* <ObjectAsState />
      <ArrayAsState /> */}

      {/* <Parent /> */}

      {/* <OptParent>
        <Child />
      </OptParent> */}

      {/* <GrandParent /> */}

      {/* <Parent /> */}

      {/* <Parent /> */}

      {/* <Parent /> */}

      {/* <Parent /> */}

      <Parent />
      {/* <Parent>
        <ChildA />
      </Parent> */}
    </div>

    // </CountContext.Provider>
  );
}

export default App;
