import React, { useEffect, useState } from 'react';
import { fetchTasks, markTaskComplete } from '../../services/api';
import './Dashboard.css'; // Import CSS for styling

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const headings = ["Company Name", "Last Five Communications", "Next Scheduled Communication",'Action'];

  // Fetch tasks from the API
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTasks();
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getTasks();
  }, []);

  // Mark a task as completed
  const handleCompleteTask = async (taskId) => {
    try {
      await markTaskComplete(taskId);
      setTasks(tasks.map(task => (task._id === taskId ? { ...task, completed: !task.completed } : task)));
    } catch (error) {
      console.error('Error marking task as complete:', error);
    }
  };

  // Group tasks by company
  const groupedTasks = tasks.reduce((acc, task) => {
    const companyName = task.companyId?.name || 'Unknown';
    if (!acc[companyName]) {
      acc[companyName] = [];
    }
    acc[companyName].push(task);
    return acc;
  }, {});

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedTasks).map(company => {
            const companyTasks = groupedTasks[company];

            // Last five completed communications
            const lastFiveCommunications = companyTasks.filter(task => task.completed).slice(-5);

            // Next scheduled communication
            const nextScheduledTask = companyTasks
              .filter(task => !task.completed)
              .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
            const flag = nextScheduledTask?false:true;
            return (
              <tr key={company}>
                <td>{company}</td>
                <td>
                  {lastFiveCommunications.length > 0 ? (
                    <ul>
                      {lastFiveCommunications.map(task => (
                        <li
                          key={task._id}
                          className="completed-task"
                          title={task.notes || 'No additional notes'}
                        >
                          {task.notes || 'Communication Task'} ({new Date(task.date).toLocaleDateString()})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    'No completed communications.'
                  )}
                </td>
                <td>
                  {nextScheduledTask ? (
                    <div
                      className={`next-task ${new Date(nextScheduledTask.date) < new Date() ? 'overdue' : new Date(nextScheduledTask.date).toDateString() === new Date().toDateString() ? 'due-today' : ''}`}
                    >
                      {nextScheduledTask.notes || 'Communication Task'} ({new Date(nextScheduledTask.date).toLocaleDateString()})
                      <button onClick={() => handleCompleteTask(nextScheduledTask._id)}>
                        Mark Complete
                      </button>
                    </div>
                  ) : (
                    'No upcoming communications.'
                  )}
                </td>
                <td>
                <button className={`btn ${flag ?'disable':''}`} onClick={() => handleCompleteTask(nextScheduledTask._id)}>Mark Complete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
