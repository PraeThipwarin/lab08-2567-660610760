import Header from "./components/Header";
import Task from "./components/Task";
import Footer from "./components/Footer";
import TaskImput from "./components/TaskImput";

export default function Home() {
const Tasks = [
  { id: 1, name: "Read a book", IsDone: true },
  { id: 2, name: "Take a shower", IsDone: false },
  { id: 3, name: "Sleep", IsDone: false }
];
  
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskImput />

        {/* task */}
         <Task {...Tasks[0]}/>
         <Task {...Tasks[1]}/>
         <Task {...Tasks[2]}/>
      </div>

      {/* //footer section */}
      <Footer year='2023' name='Thipwarin Seewarangkoon' studentId='660610760'/>
    </div>
  );
}
