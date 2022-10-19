# Bare Bones React with Vite

## Getting Started

[React](https://reactjs.org/) is a JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support.

Using the two in conjunction is one of the fastest ways to build a web app.

## Usage

Choose one of the two methods below to get the code.

### Clone the Repository

```sh
git clone git@github.com:BurlingtonCodeAcademy/bare-bones-react-with-vite.git
```

### Use the Repository as a Template

1. Click "Use this Template"
2. Select a new name for your repository.
3. Select your user account as the destination account.

### Install the Dependencies

```sh
npm install
```

### Run the Application

```sh
npm run dev
```

### Edit the Code

Open the project in VS Code

```sh
code .
```

Make changes to the `src/App.jsx` file

```js
// src/App.jsx

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LogoSection />
      <ClickTracker count={count} handleClick={setCount} />
      <Messages />
    </div>
  )
}
```

### Update the Component Style

```js
// src/App.css

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
```

## Contribute

If you notice something wrong in the code, please feel free to create a pull-request and fix it.

[Github Docs on Pull-Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)


## Have Fun

Feel free to make more changes, or reorganize the code as you see fit!

😄 👏 👍 ❤
