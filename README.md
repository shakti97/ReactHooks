# ReactHooks
Created with CodeSandbox

##Use State
1.  useState return pairs 
        1. the current state value
        2. function which let you update the value
Note:- Hooks don’t work inside classes. But you can use them instead of writing classes.

2. useState hooks takes a single argument which is the initial State

##UseEffect
1. It becomes usefull over componentDidMount and componentDidUpdate when you want to perform the same effect after each rerender with no cleanUp.

2. with cleanUp effect, useEffect return a cleanup function which is used to clean up the subscription before unMounting .
=>if applying the next patch it unsubscribe the current effect
Concept says:- in our subscription , we are fetching the friend id and his status, what if friend goes offline and you r on the same screen it shows you online, which turns out a bug in code, that's why effect run on each update

Note:- Hooks follow the order in which they are return

##Custom Hooks
Use:-
      before hooks we have two different ways to share logic of a component render props and HOC but through hooks we can do this by creating our custom Hooks
1. it just a simple function whose name start with 'use'
