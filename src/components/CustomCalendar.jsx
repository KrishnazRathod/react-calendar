import React, { useState, useMemo } from 'react';
import './CustomCalendar.scss';

const getWeekDates = (startDate) => {
  const dates = [];
  const start = new Date(startDate);
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    dates.push(d);
  }
  return dates;
};

const formatDate = (date) => date.toISOString().split('T')[0];

const getWeekStart = (date) => {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  d.setHours(0, 0, 0, 0);
  return d;
};

const CustomCalendar = ({ data, activityTypes, propertyList }) => {
  const [weekStart, setWeekStart] = useState(() => {
    const today = new Date(Object.keys(data)[0] || new Date());
    today.setDate(today.getDate() - today.getDay());
    today.setHours(0, 0, 0, 0);
    return today;
  });
  const [search, setSearch] = useState('');
  const [activityFilter, setActivityFilter] = useState('All');
  // REMOVED: const [propertyFilter, setPropertyFilter] = useState('All');

  const weekDates = useMemo(() => getWeekDates(weekStart), [weekStart]);

  const handlePrevWeek = () => {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    setWeekStart(prev);
  };
  const handleNextWeek = () => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  };
  const handleDateChange = (e) => {
    const picked = new Date(e.target.value);
    setWeekStart(getWeekStart(picked));
  };

  const filterCard = (card, type) => {
    if (search && !JSON.stringify(card).toLowerCase().includes(search.toLowerCase())) return false;
    if (activityFilter !== 'All' && type !== activityFilter) return false;
    // REMOVED: if (propertyFilter !== 'All' && card.unit !== propertyFilter) return false;
    return true;
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <div className="calendar-arrows">
          <button className="calendar-arrow left" onClick={handlePrevWeek} aria-label="Previous week">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#007bff" strokeWidth="2" fill="#fff"/>
              <polyline points="23,13 16,20 23,27" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="calendar-title">
          {weekDates[0].toLocaleDateString()} - {weekDates[6].toLocaleDateString()}
        </div>
        <div className="calendar-arrows">
          <button className="calendar-arrow right" onClick={handleNextWeek} aria-label="Next week">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#007bff" strokeWidth="2" fill="#fff"/>
              <polyline points="17,13 24,20 17,27" fill="none" stroke="#007bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <input
          type="date"
          className="calendar-date-picker"
          value={formatDate(weekStart)}
          onChange={handleDateChange}
          style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}
        />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="calendar-search"
        />
        <select value={activityFilter} onChange={e => setActivityFilter(e.target.value)}>
          <option value="All">All Activities</option>
          {activityTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
        {/* REMOVED: Property filter select */}
      </div>
      <div className="calendar-week-view">
        {weekDates.map(date => {
          const dateStr = formatDate(date);
          const dayData = data[dateStr] || {};
          return (
            <div className="calendar-day-column" key={dateStr}>
              <div className="calendar-day-header">
                {date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
              </div>
              <div className="calendar-day-cards">
                {Object.entries(dayData).map(([type, cards]) =>
                  cards.filter(card => filterCard(card, type)).map((card, idx) => (
                    <div className="calendar-card" key={type + idx}>
                      <div className="calendar-card-type">{type}</div>
                      {Object.entries(card).map(([k, v]) => (
                        <div className="calendar-card-field" key={k}><b>{k}:</b> {v}</div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar; 