import CustomCalendar from './components/CustomCalendar';
import './App.css';

const sampleData = {
  "2025-07-01": {
    "MoveIn": [
      { "tenant": "John Doe", "unit": "A101", "time": "10:00 AM" },
      { "tenant": "Alice Smith", "unit": "B202", "time": "12:30 PM" },
      { "tenant": "Bob Brown", "unit": "C303", "time": "09:00 AM" },
      { "tenant": "Carol White", "unit": "D404", "time": "11:15 AM" },
      { "tenant": "David Black", "unit": "E505", "time": "01:00 PM" },
      { "tenant": "Eva Green", "unit": "F606", "time": "02:30 PM" },
      { "tenant": "Frank Blue", "unit": "G707", "time": "03:45 PM" },
      { "tenant": "Grace Red", "unit": "A101", "time": "04:00 PM" },
      { "tenant": "Hank Yellow", "unit": "B202", "time": "05:00 PM" },
      { "tenant": "Ivy Purple", "unit": "C303", "time": "06:00 PM" }
    ],
    "MoveOut": [
      { "tenant": "Jack Orange", "unit": "D404", "time": "07:00 AM" },
      { "tenant": "Kara Pink", "unit": "E505", "time": "08:00 AM" },
      { "tenant": "Liam Gray", "unit": "F606", "time": "09:30 AM" },
      { "tenant": "Mona Cyan", "unit": "G707", "time": "10:30 AM" },
      { "tenant": "Nina Lime", "unit": "A101", "time": "11:30 AM" }
    ],
    "Inspections": [
      { "unit": "B202", "inspector": "Mr. Ravi", "status": "Pending" },
      { "unit": "C303", "inspector": "Ms. Priya", "status": "Completed" },
      { "unit": "D404", "inspector": "Mr. Lee", "status": "Pending" },
      { "unit": "E505", "inspector": "Ms. Smith", "status": "Completed" }
    ]
  },
  "2025-07-02": {
    "MoveIn": [
      { "tenant": "Oscar Silver", "unit": "A101", "time": "08:00 AM" },
      { "tenant": "Pam Gold", "unit": "B202", "time": "09:00 AM" }
    ],
    "MoveOut": [
      { "tenant": "Quinn Bronze", "unit": "C303", "time": "10:00 AM" },
      { "tenant": "Rita Copper", "unit": "D404", "time": "11:00 AM" }
    ],
    "Inspections": [
      { "unit": "E505", "inspector": "Ms. Priya", "status": "Completed" },
      { "unit": "F606", "inspector": "Mr. Ravi", "status": "Pending" }
    ]
  },
  "2025-07-03": {
    "MoveIn": [
      { "tenant": "Sam Indigo", "unit": "G707", "time": "09:00 AM" },
      { "tenant": "Tina Violet", "unit": "A101", "time": "10:00 AM" }
    ],
    "MoveOut": [
      { "tenant": "Uma Magenta", "unit": "B202", "time": "11:00 AM" },
      { "tenant": "Victor Teal", "unit": "C303", "time": "12:00 PM" }
    ],
    "Inspections": [
      { "unit": "D404", "inspector": "Ms. Smith", "status": "Pending" }
    ]
  },
  "2025-07-04": {
    "MoveIn": [
      { "tenant": "Wendy Blue", "unit": "D404", "time": "08:30 AM" }
    ],
    "MoveOut": [
      { "tenant": "Xander Red", "unit": "E505", "time": "09:30 AM" }
    ],
    "Inspections": [
      { "unit": "F606", "inspector": "Mr. Lee", "status": "Completed" }
    ]
  },
  "2025-07-05": {
    "MoveIn": [
      { "tenant": "Yara Green", "unit": "G707", "time": "10:00 AM" }
    ],
    "MoveOut": [
      { "tenant": "Zane Black", "unit": "A101", "time": "11:00 AM" }
    ],
    "Inspections": [
      { "unit": "B202", "inspector": "Ms. Priya", "status": "Pending" }
    ]
  },
  "2025-07-06": {
    "MoveIn": [
      { "tenant": "Amy White", "unit": "C303", "time": "09:00 AM" }
    ],
    "MoveOut": [
      { "tenant": "Ben Brown", "unit": "D404", "time": "10:00 AM" }
    ],
    "Inspections": [
      { "unit": "E505", "inspector": "Mr. Ravi", "status": "Completed" }
    ]
  },
  "2025-07-07": {
    "MoveIn": [
      { "tenant": "Cara Black", "unit": "F606", "time": "08:00 AM" }
    ],
    "MoveOut": [
      { "tenant": "Derek Blue", "unit": "G707", "time": "09:00 AM" }
    ],
    "Inspections": [
      { "unit": "A101", "inspector": "Ms. Smith", "status": "Pending" }
    ]
  }
};

const activityTypes = ["MoveIn", "MoveOut", "Inspections"];
const propertyList = ["A101", "B202", "C303", "D404", "E505", "F606", "G707"];

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Custom Calendar (Week View)</h2>
      <CustomCalendar data={sampleData} activityTypes={activityTypes} propertyList={propertyList} />
    </div>
  );
}

export default App;
