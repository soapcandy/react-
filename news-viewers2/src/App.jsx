import NewsList from "./components/NewsList";

function App() {
  // const [data, setData] = useState(null);

  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://newsapi.org/v2/top-headlines?country=kr&apiKey=6b16364a82fb4060a0c0a421d9dff9ce`
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return <NewsList />;
}

export default App;
