import React, { useState, useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import {CalendarContext} from '../../utils/CalendarContext';
import { fetchTasks, createTask } from '../../services/api';
import './calendar.css'
function CalendarView() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState({ notes: '', companyId: '', methodId: '', date: '' });

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTasks();
        const formattedEvents = response.data.map((task) => ({
          id: task._id,
          title: task.notes || 'Communication Task',
          start: task.date,
          color: task.completed ? 'green' : 'red',
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getTasks();
  }, []);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  const handleCreateTask = async () => {
    try {
      await createTask({ ...newTask, date: selectedDate });
      setShowModal(false);
      setNewTask({ notes: '', companyId: '', methodId: '', date: '' });
      const response = await fetchTasks();
      const formattedEvents = response.data.map((task) => ({
        id: task._id,
        title: task.notes || 'Communication Task',
        start: task.date,
        color: task.completed ? 'green' : 'red',
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const { showModal, setShowModal }= useContext(CalendarContext);


  console.log(`showModal`)

  const Modelcontrol= ()=>{
    try {
      if(showModal){
        console.log("cala");
        return true;
      }else{
        return false;
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, timelinePlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={false}
        selectable={true}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />

      {Modelcontrol() && (
        <div className="modal">
          <h3>Create Task</h3>
          <input
            type="text"
            placeholder="Task Notes"
            value={newTask.notes}
            onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={newTask.companyId}
            onChange={(e) => setNewTask({ ...newTask, companyId: e.target.value })}
          />
          <input
            type="text"
            placeholder="Method Name"
            value={newTask.methodId}
            onChange={(e) => setNewTask({ ...newTask, methodId: e.target.value })}
          />
          <button onClick={handleCreateTask}>Create Task</button>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default CalendarView;
