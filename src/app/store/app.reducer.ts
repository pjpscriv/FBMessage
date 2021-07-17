import { createReducer, on } from '@ngrx/store';
import { Thread, ThreadMap } from '../models/thread.interface';
import { UpdateLoadProgressAction, UpdateMessagesAction, UpdateThreadsAction, UpdateDarkModeAction } from './app.actions';
import { initialState } from './app.state';


export const messagesReducer = createReducer(
  initialState.messages,
  on(UpdateMessagesAction,
    (existingMessages, { messages }) => {
      return [...existingMessages, ...messages];
    }
  )
);

export const loadProgressReducer = createReducer(
  initialState.loadProgress,
  on(UpdateLoadProgressAction,
    (oldProgress, { loadProgress }) => {
      return loadProgress;
    }
  )
);

export const threadsReducer = createReducer(
  initialState.threads,
  on(UpdateThreadsAction,
    (oldThreadMap, { threads }) => {
      const newThreadMap = {};
      Object.values(oldThreadMap).forEach(thread => addThread(thread, newThreadMap));
      threads.forEach(thread => addThread(thread, newThreadMap));
      return newThreadMap;
    }
  )
);

export const darkModeReducer = createReducer(
  initialState.darkMode,
  on(UpdateDarkModeAction,
    (oldDarkMode, { darkMode }) => {
      return darkMode;
    }
  )
);

function addThread(thread: Thread, threads: ThreadMap): void {
  if (threads[thread.id]) {
    console.log('Duplicate', thread.id, thread.title);
    const oldThread = threads[thread.id];
    const newThread = Object.assign({}, thread);
    newThread.nb_messsages += oldThread.nb_messsages;
    threads[oldThread.id] = newThread;
  } else {
    threads[thread.id] = thread;
  }
}