/* eslint-disable no-unused-vars */
import Table from "./Componet/Table/Table";
import Themes from "./Componet/Themes/Themes";
import data from "./Data/posts.json";

const App = () => {

  return (
    <>
      <Table data={data}/>
      <Themes/>
    </>
  )
}

export default App;
