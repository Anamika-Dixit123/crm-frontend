import "./App.css";

import PrivateRoute from "./components/private-route/PrivateRoute";

import DashboardPage from "./page/dashboard/DashboardPage";
import { Entry } from "./page/entry/EntryPage";
import AddTicket from "./page/new-ticket/AddTicket";
import TicketList from "./page/ticket-list/TicketList";
import TicketPage from "./page/ticket/TicketPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Entry />} />

          <Route
            path="/dashboardpage"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/addticket"
            element={
              <PrivateRoute>
                <AddTicket />
              </PrivateRoute>
            }
          />

          <Route
            path="/ticketlist"
            element={
              <PrivateRoute>
                <TicketList />
              </PrivateRoute>
            }
          />

          <Route
            path="/ticketpage/:tid"
            element={
              <PrivateRoute>
                <TicketPage />
              </PrivateRoute>
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;