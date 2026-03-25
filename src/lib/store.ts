import { create } from 'zustand'

export type TaskStatus = 'Open' | 'Accepted' | 'In Progress' | 'Completed'

export interface Task {
  id: string
  title: string
  category: string
  distance: string
  urgency: string
  pay: number
  posterName: string
  posterRating: number
  status: TaskStatus
  description: string
  location: { pickup: string; dropoff?: string }
  createdAt: string
  isMyTask?: boolean
}

interface AppState {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'status'>) => void
  updateTaskStatus: (id: string, status: TaskStatus) => void
}

const dummyTasks: Task[] = [
  {
    id: '1',
    title: 'Deliver tiffin to office',
    category: 'Tiffin Delivery',
    distance: '1.2 km away',
    urgency: 'Needed in 1 hr',
    pay: 150,
    posterName: 'Priya Sharma',
    posterRating: 4.8,
    status: 'Open',
    description: 'Need someone to pick up a lunchbox from my home in Koramangala 4th Block and deliver it to Embassy Tech Village. I will pay standard delivery rate.',
    location: { pickup: 'Koramangala 4th Block', dropoff: 'Embassy Tech Village' },
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Feed my dog at 6pm',
    category: 'Pet Care',
    distance: '0.8 km away',
    urgency: 'Needed today',
    pay: 200,
    posterName: 'Arjun Mehta',
    posterRating: 4.9,
    status: 'Open',
    description: 'I will be late from work. Need someone to feed my Golden Retriever. Food is already in the bowl, just needs to be served. My neighbor has the keys.',
    location: { pickup: 'Indiranagar 1st Stage' },
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '3',
    title: 'Pick up parcel from Bluedart',
    category: 'Parcel Pickup',
    distance: '2.5 km away',
    urgency: 'Needed tomorrow',
    pay: 120,
    posterName: 'Sneha Iyer',
    posterRating: 4.5,
    status: 'Open',
    description: 'I have a package waiting at Bluedart HSR Layout. I will share the OTP. Please pick it up and deliver it to my apartment.',
    location: { pickup: 'Bluedart HSR Layout', dropoff: 'HSR Sector 2' },
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: '4',
    title: 'Stand in queue at HDFC bank',
    category: 'Queue Standing',
    distance: '0.5 km away',
    urgency: 'Needed in 2 hrs',
    pay: 300,
    posterName: 'Rohit Gupta',
    posterRating: 4.2,
    status: 'Open',
    description: 'Need someone to hold my spot in the queue for a demand draft at HDFC bank branch while I grab lunch. Will take about 45 mins.',
    location: { pickup: 'HDFC Bank, Koramangala' },
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  }
]

export const useAppStore = create<AppState>((set) => ({
  tasks: dummyTasks,
  addTask: (taskData) => set((state) => ({
    tasks: [
      {
        ...taskData,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date().toISOString(),
        status: 'Open',
        isMyTask: true
      },
      ...state.tasks
    ]
  })),
  updateTaskStatus: (id, status) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, status } : t)
  }))
}))
