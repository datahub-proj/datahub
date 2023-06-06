import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const a = createAsyncThunk();

function App() {
  const b = useSelector();
  return <div className="app">a</div>;
}

export default App;
