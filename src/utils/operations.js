// Save event to events store
const saveEvent = (type) => {
  if (type === "add") {
  } else {
  }
};

// Move event to expiredEvents store
const archiveEvent = () => {};

// Move event to recycleBin store
const deleteEvent = () => {};

// Restore event from recycleBin store to events store
const restoreEvent = () => {};

// Move expired events to expiredEvents store
const updateArchivedEvents = () => {};

// Permanently delete events from recycleBin store, if they are older than 30 days
const updateRecycleBin = () => {};

export {
  saveEvent,
  archiveEvent,
  deleteEvent,
  restoreEvent,
  updateArchivedEvents,
  updateRecycleBin,
};
