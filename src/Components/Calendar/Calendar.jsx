import { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  const calendarRef = useRef(null);
  const [selectedDates, setSelectedDates] = useState([]);

  const staticEvents = [
    {
      title: 'Car-12 By Client #250',
      start: '2024-03-05',
      end: '2024-03-20',
    },
    {
      title: 'Car-5 By Client #136',
      start: '2024-03-15',
      end: '2024-03-28',
    },  
    {
      title: 'Car-9 By Client #3',
      start: '2024-03-28',
      end: '2024-03-30',
    },
    {
      title: 'Car-15 By Client #9',
      start: '2024-04-01',
      end: '2024-04-03',
    },
  ];

  const options = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    selectable: true,
    select: handleSelect,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [...staticEvents, ...selectedDates.map((date) => ({
      title: date.title || 'Fecha seleccionada',
      start: date.startStr,
      end: date.endStr,
    }))],
  };

  function handleSelect(info) {
    const title = prompt('Ingresa el título para esta fecha:');
    if (title) {
      setSelectedDates([...selectedDates, { ...info, title }]);
    }
  }

  return (
    <div className="bookings">
      <div className="bookings_wrapper">
        <FullCalendar className='calendar' ref={calendarRef} {...options} />
      </div>
    </div>
  );
}