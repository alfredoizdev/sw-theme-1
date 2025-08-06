export interface User {
  id: string
  name: string
  distance: string
  status: 'online' | 'offline'
  relationship: 'straight' | 'bi' | 'bi-curious'
  onlineTime: string
  image: string
}

export const mockUsers: User[] = [
  {
    id: 'admiral45',
    name: 'Admiral45',
    distance: '26 Mi.',
    status: 'online',
    relationship: 'bi',
    onlineTime: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'AA24701',
    name: 'AA24701',
    distance: '191 Mi.',
    status: 'online',
    relationship: 'straight',
    onlineTime: '5 minutes ago',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: '69times96',
    name: '69times96',
    distance: '628 Mi.',
    status: 'offline',
    relationship: 'straight',
    onlineTime: '1 day ago',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'user123',
    name: 'Sarah',
    distance: '23 Mi.',
    status: 'online',
    relationship: 'bi-curious',
    onlineTime: '30 minutes ago',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'user456',
    name: 'Mike',
    distance: '16 Mi.',
    status: 'online',
    relationship: 'straight',
    onlineTime: '1 hour ago',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'user789',
    name: 'Emma',
    distance: '45 Mi.',
    status: 'offline',
    relationship: 'bi',
    onlineTime: '3 hours ago',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'swinger2024',
    name: 'Jessica',
    distance: '34 Mi.',
    status: 'online',
    relationship: 'bi',
    onlineTime: '15 minutes ago',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'couplefun',
    name: 'David',
    distance: '67 Mi.',
    status: 'online',
    relationship: 'straight',
    onlineTime: '45 minutes ago',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'hotwife_amy',
    name: 'Amy',
    distance: '28 Mi.',
    status: 'offline',
    relationship: 'bi-curious',
    onlineTime: '2 days ago',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 'swinger_couple',
    name: 'Robert',
    distance: '89 Mi.',
    status: 'online',
    relationship: 'bi',
    onlineTime: '10 minutes ago',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
]
