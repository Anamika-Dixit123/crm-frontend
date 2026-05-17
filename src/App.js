import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import DashboardPage from './page/dashboard/DashboardPage';
import {Entry} from './page/entry/EntryPage';

function App() {
  return (
    <div className="App">
       {/* <Entry/> */}
       <DefaultLayout>
        <DashboardPage />
       </DefaultLayout>
    </div>
  );
}

export default App;
