This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
Use `npm start` to run in development mode and `git checkout 'step<step number>'` to follow along.

## React Hooks Demo

This app is a teaching tool to demonstrate Hooks use in a small React application. The finished application uses [dog.ceo](https://dog.ceo/dog-api/)'s api to 'fetch' - get it? - a random dog picture based on a breed input by the user.

The demo focuses on the `Search` and `Picture` components' interaction with state and effects. Each branch is a step in itteration to a final app which uses a custom hook to retrieve - get it again? - a dog picture based on breed.

### `start`

Initial scaffolding for demo.

### `step1`

In step 1 useState declares a piece of state `breed` and a function to change breed-state `setBreed`. These are passed to the `Search` component and change state based on user input.

### `step2`

In step 2 axios is used inside of useEffect to get picture data from dog.ceo's api. 

A new piece of state `fetch` is needed and pased to a button that changes `fetch` to match the current `breed`. `fetch` is used in useEffect's "deps" array, firing a new request every time `fetch` changes. The piece of state `picture` is set with `setPicture` on a successful request. To handle bad inputs and failed requests, `isError` is used to `setError` in the catch block. `picture` and `isError` are both passed to the `Picture` component to render the appropriate data to the DOM.

### `step3`

In step 3 all code used to get the picture from the external api is extracted into a new Custom Hook. 

`usePupFetcher` takes in a breed (eventually set using `breed` inside of the `Search` component) and returns a `picture` and a function to `setPicture` when it takes in another breed. Theoretically, this custom hook could now be used in another application or easily handed off to other components as the Pup-Fetcher app grows.

This example of a Custom Hook, while simple, highlights the allure and power of Hooks.