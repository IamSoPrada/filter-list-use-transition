# filter-list-use-transition
Trying new hook useTransition on list of items.

All the logic you can find in Form component.

1) Fetching list of posts from [json-placeholder](https://jsonplaceholder.typicode.com/)
2) Filtering by text using form input and onChange handler with useTransition hook.

**startTransition and useTransition let you mark some state updates as not urgent. Other state updates are considered urgent by default. React will allow urgent state updates (for example, updating a text input) to interrupt non-urgent state updates (for example, rendering a list of search results).**

The project is posted on Netlify  : [click here](https://filter-use-transition.netlify.app/).

React useTransition hook docs : [click here](https://ru.reactjs.org/docs/concurrent-mode-reference.html)

![image](https://user-images.githubusercontent.com/64264723/166452687-ec917e74-6a96-4153-82fa-b9ef97224746.png)
