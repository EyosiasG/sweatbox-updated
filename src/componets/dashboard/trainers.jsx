import { useState } from 'react'
import { motion } from 'framer-motion'
import 'react-calendar/dist/Calendar.css'

const Trainers = () => {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'David Miller',
      specialization: 'Strength Training', 
      experience: '8 years',
      rating: 4.9,
      clients: 45,
      availability: 'Morning/Evening',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      certifications: ['NASM CPT', 'CrossFit L2'],
      sessions: [
        { date: '2024-01-15', time: '09:00', client: 'John Doe', type: 'Strength Training' },
        { date: '2024-01-15', time: '11:00', client: 'Sarah Parker', type: 'Personal Training' },
        { date: '2024-01-16', time: '15:30', client: 'Jane Smith', type: 'Weight Training' },
        { date: '2024-01-16', time: '17:00', client: 'Mike Ross', type: 'Strength Training' },
        { date: '2024-01-17', time: '10:00', client: 'Emma Wilson', type: 'Personal Training' },
        { date: '2024-01-18', time: '14:00', client: 'Chris Evans', type: 'Strength Training' }
      ],
      bio: 'Specializing in strength and conditioning with focus on proper form and technique. Passionate about helping clients achieve their fitness goals safely and effectively.'
    },
    {
      id: 2, 
      name: 'Sarah Wilson',
      specialization: 'Yoga & Pilates',
      experience: '6 years',
      rating: 4.8,
      clients: 38,
      availability: 'Afternoon',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      certifications: ['RYT 200', 'PMA-CPT'],
      sessions: [
        { date: '2024-01-15', time: '14:00', client: 'Mike Johnson', type: 'Yoga' },
        { date: '2024-01-17', time: '16:00', client: 'Sarah Lee', type: 'Pilates' }
      ],
      bio: 'Dedicated to bringing mindfulness and body awareness through yoga and pilates. Helping clients find balance, flexibility and inner strength.'
    },
    {
      id: 3,
      name: 'Michael Chen', 
      specialization: 'Sports Conditioning',
      experience: '10 years',
      rating: 4.9,
      clients: 52,
      availability: 'Flexible',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      certifications: ['CSCS', 'USAW'],
      sessions: [
        { date: '2024-01-16', time: '10:00', client: 'Tom Wilson', type: 'Sports Conditioning' },
        { date: '2024-01-18', time: '11:30', client: 'Amy Chen', type: 'Sports Conditioning' }
      ],
      bio: 'Elite sports performance specialist focused on developing speed, agility and power. Working with athletes to reach peak performance.'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      specialization: 'Weight Loss',
      experience: '5 years', 
      rating: 4.7,
      clients: 33,
      availability: 'Morning',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      certifications: ['ACE CPT', 'Precision Nutrition'],
      sessions: [
        { date: '2024-01-15', time: '08:00', client: 'Lisa Brown', type: 'Nutrition' },
        { date: '2024-01-17', time: '09:30', client: 'David Park', type: 'Nutrition' }
      ],
      bio: 'Nutrition and fitness coach specializing in sustainable weight loss through lifestyle changes. Creating personalized plans for long-term success.'
    }
  ])

  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedDate, setSelectedDate] = useState(new Date())

  const filterTrainers = (filter) => {
    setActiveFilter(filter)
  }

  const filteredTrainers = trainers.filter(trainer => {
    if (activeFilter === 'all') return true
    
    const specialization = trainer.specialization.toLowerCase()
    switch(activeFilter) {
      case 'strength':
        return specialization.includes('strength')
      case 'cardio':
        return specialization.includes('cardio') || specialization.includes('conditioning')
      case 'yoga':
        return specialization.includes('yoga')
      case 'weight loss':
        return specialization.includes('weight loss')
      default:
        return true
    }
  })

  const formatDate = (date) => date.toISOString().split('T')[0]

  const getWeekDates = (date) => {
    const week = []
    const start = new Date(date)
    start.setDate(start.getDate() - start.getDay())
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      week.push(day)
    }
    return week
  }

  const workingHours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`)

  const handleEditSession = (session, trainer) => {
    const updatedClient = prompt('Update client name:', session.client)
    const updatedType = prompt('Update session type:', session.type)

    if (updatedClient && updatedType) {
      const updatedTrainers = trainers.map(t => {
        if (t.id === trainer.id) {
          return {
            ...t,
            sessions: t.sessions.map(s => {
              if (s.date === session.date && s.time === session.time) {
                return {
                  ...s,
                  client: updatedClient,
                  type: updatedType
                }
              }
              return s
            })
          }
        }
        return t
      })
      setTrainers(updatedTrainers)
    }
  }

  const handleAddSession = (date, time, trainer) => {
    const client = prompt('Enter client name:')
    const type = prompt('Enter session type:')

    if (client && type) {
      const updatedTrainers = trainers.map(t => {
        if (t.id === trainer.id) {
          return {
            ...t,
            sessions: [...t.sessions, {
              date: formatDate(date),
              time,
              client,
              type
            }]
          }
        }
        return t
      })
      setTrainers(updatedTrainers)
    }
  }

  const handleDeleteSession = (session, trainer) => {
    if (confirm('Are you sure you want to delete this session?')) {
      const updatedTrainers = trainers.map(t => {
        if (t.id === trainer.id) {
          return {
            ...t,
            sessions: t.sessions.filter(s => 
              s.date !== session.date || s.time !== session.time
            )
          }
        }
        return t
      })
      setTrainers(updatedTrainers)
    }
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-5xl font-extrabold text-secondary-900 mb-4">
              Meet Our Expert Trainers
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl">
              Transform your fitness journey with our certified professionals
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
          >
            Join Our Team
          </motion.button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['all', 'strength', 'cardio', 'yoga', 'weight loss'].map((filter) => (
            <button
              key={filter}
              onClick={() => filterTrainers(filter)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-secondary-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary-600">
                    ⭐ {trainer.rating}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-secondary-600">
                    {trainer.clients} Clients
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {trainer.specialization}
                  </p>
                </div>

                <p className="text-secondary-600 mb-6 line-clamp-3">
                  {trainer.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {trainer.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setSelectedTrainer(trainer)
                      setShowCalendar(true)
                    }}
                  >
                    Schedule
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
                  >
                    Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Schedule Modal */}
      {showCalendar && selectedTrainer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-4 md:p-8 w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sticky top-0 bg-white pb-4 border-b">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-1">
                  {selectedTrainer.name}'s Schedule
                </h3>
                <p className="text-sm text-secondary-600">Working Hours: {selectedTrainer.availability}</p>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <button
                  onClick={() => {
                    const newDate = new Date(selectedDate)
                    newDate.setDate(newDate.getDate() - 7)
                    setSelectedDate(newDate)
                  }}
                  className="p-2 hover:bg-secondary-100 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-medium">
                  {getWeekDates(selectedDate)[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} 
                  - 
                  {getWeekDates(selectedDate)[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <button
                  onClick={() => {
                    const newDate = new Date(selectedDate)
                    newDate.setDate(newDate.getDate() + 7)
                    setSelectedDate(newDate)
                  }}
                  className="p-2 hover:bg-secondary-100 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="p-2 hover:bg-secondary-100 rounded-lg ml-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Schedule Grid */}
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[768px] p-4">
                {/* Days Header */}
                <div className="grid grid-cols-8 gap-2 mb-4">
                  <div className="h-16 p-2"></div>
                  {getWeekDates(selectedDate).map((date) => (
                    <div
                      key={date.toISOString()}
                      className={`text-center p-2 rounded-lg ${
                        formatDate(date) === formatDate(new Date()) 
                          ? 'bg-primary-50 text-primary-700' 
                          : 'bg-secondary-50'
                      }`}
                    >
                      <p className="font-semibold">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                {workingHours.map((hour) => (
                  <div key={hour} className="grid grid-cols-8 gap-2 mb-2">
                    <div className="p-2 text-right text-sm text-secondary-600 font-medium">
                      {hour}
                    </div>
                    {getWeekDates(selectedDate).map((date) => {
                      const sessionForSlot = selectedTrainer.sessions.find(
                        session => 
                          session.date === formatDate(date) && 
                          session.time === hour
                      )

                      return (
                        <div
                          key={`${date.toISOString()}-${hour}`}
                          className={`p-2 rounded-lg border transition-all duration-200 min-h-[60px] ${
                            sessionForSlot
                              ? 'bg-primary-50 border-primary-200'
                              : 'border-dashed border-secondary-200 hover:border-primary-400 cursor-pointer'
                          }`}
                          onClick={() => {
                            if (!sessionForSlot) {
                              handleAddSession(date, hour, selectedTrainer)
                            }
                          }}
                        >
                          {sessionForSlot && (
                            <div className="text-sm">
                              <p className="font-semibold text-primary-700">
                                {sessionForSlot.client}
                              </p>
                              <p className="text-xs text-primary-600 mt-1">
                                {sessionForSlot.type}
                              </p>
                              <div className="flex justify-between items-center mt-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleEditSession(sessionForSlot, selectedTrainer)
                                  }}
                                  className="text-blue-500 hover:text-blue-700 p-1"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteSession(sessionForSlot, selectedTrainer)
                                  }}
                                  className="text-red-500 hover:text-red-700 p-1"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Trainers
