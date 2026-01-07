/**
 * Room Feature - Public API
 * 
 * All room-related components and data helpers.
 * Import from here for clean access to room functionality.
 */

// UI Components
export { default as RoomCard } from './RoomCard'
export { default as RoomDetailModal } from './RoomDetailModal'
export { default as ImageGallery } from './ImageGallery'

// Data helpers
export { 
  getAllRooms, 
  getRoomById, 
  getRoomsPreview,
  getRoomForDisplay,
  getRoomsForCards,
  ROOMS 
} from './room.data'
