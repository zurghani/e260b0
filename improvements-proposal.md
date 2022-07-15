# Part 2: Written Evaluation

---

## _Changes to program_

The goal is to replace the part of getting the data from file into network request.
Assuming that we will be getting the info from a Restful API, it would be a `GET` request to obtaion all blog posts.
To perform the actual request we can use the Fetch api or install an npm packege to do so such as Axios.
The end point could be stored in a `.env` file.
At the component `BlogList.jsx` we remove the json file import and then

- Import `useEffect` hook, and we set it to run once when the app is launched.
- Use Fetch or Axios to perfore the `GET` request, and make the request `async` so it wouldn't block the UI.
- Use `useState` hook to store the data obtained.

## Using nanoid & the issues would this cause for generating keys in React

Not sure of the effect however the only thing might be hard readability for developers.
