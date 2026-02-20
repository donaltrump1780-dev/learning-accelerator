// Client-side progress storage (localStorage)
// Replaces server-side progress that gets wiped on Railway restarts

const STORAGE_KEY = 'learning-accelerator-progress';

// Load progress from localStorage
export function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultProgress();
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to load progress from localStorage:', error);
    return getDefaultProgress();
  }
}

// Save progress to localStorage
export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    console.log('✅ Progress saved to localStorage:', progress);
    return true;
  } catch (error) {
    console.error('❌ Failed to save progress:', error);
    return false;
  }
}

// Default progress structure
function getDefaultProgress() {
  return {
    completedLessons: [],
    xp: 0,
    streak: 0,
    lastActive: null,
    completedSkills: [],
    milestones: []
  };
}

// Complete a lesson
export function completeLesson(lessonId) {
  const progress = loadProgress();
  
  if (progress.completedLessons.includes(lessonId)) {
    console.log('⚠️ Lesson already completed:', lessonId);
    return progress;
  }
  
  progress.completedLessons.push(lessonId);
  progress.xp += 100;
  progress.lastActive = new Date().toISOString();
  
  // Update streak
  const today = new Date().toISOString().split('T')[0];
  const lastActiveDate = progress.lastActive ? progress.lastActive.split('T')[0] : null;
  
  if (!lastActiveDate || lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (lastActiveDate === yesterday) {
      progress.streak += 1;
    } else if (lastActiveDate !== today) {
      progress.streak = 1;
    }
  }
  
  saveProgress(progress);
  return progress;
}

// Get progress
export function getProgress() {
  return loadProgress();
}

// Reset progress (for testing)
export function resetProgress() {
  const defaultProgress = getDefaultProgress();
  saveProgress(defaultProgress);
  return defaultProgress;
}

// Sync with server (if server storage is added later)
export async function syncWithServer() {
  const localProgress = loadProgress();
  
  try {
    // Try to get server progress
    const response = await fetch('/api/progress');
    const serverProgress = await response.json();
    
    // Merge: take the one with more XP
    if (serverProgress.xp > localProgress.xp) {
      console.log('Using server progress (higher XP)');
      saveProgress(serverProgress);
      return serverProgress;
    } else if (localProgress.xp > 0) {
      console.log('Using local progress (higher XP)');
      // Could POST to server here to sync
      return localProgress;
    }
    
    return localProgress;
  } catch (error) {
    console.log('Server sync failed, using local progress');
    return localProgress;
  }
}
