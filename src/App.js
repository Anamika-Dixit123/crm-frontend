import "./App.css";
// import SearchForm from "./components/search-form/SearchForm";
import DefaultLayout from "./layout/DefaultLayout";
// import DashboardPage from "./page/dashboard/DashboardPage";
// import { Entry } from "./page/entry/EntryPage";
// import AddTicket from "./page/new-ticket/AddTicket";
import TicketList from "./page/ticket-list/TicketList";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <DashboardPage />  */}
        {/* <AddTicket /> */}
        <TicketList />
       
      </DefaultLayout>
    </div>
  );
}

export default App;
