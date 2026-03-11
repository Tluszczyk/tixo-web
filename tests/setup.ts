/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Mock localStorage/sessionStorage
const storageMock = (function() {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => { store[key] = value.toString(); }),
    clear: vi.fn(() => { store = {}; }),
    removeItem: vi.fn((key: string) => { delete store[key]; }),
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
    length: 0,
  };
})();

if (typeof global !== 'undefined') {
  (global as any).localStorage = storageMock;
  (global as any).sessionStorage = storageMock;
}
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', { value: storageMock });
  Object.defineProperty(window, 'sessionStorage', { value: storageMock });
}

// Robust Appwrite Mocks
export const mockAccount = {
  get: vi.fn().mockResolvedValue({ $id: 'guest', name: 'Guest' }),
  createEmailPasswordSession: vi.fn().mockResolvedValue({}),
  createAnonymousSession: vi.fn().mockResolvedValue({}),
  deleteSession: vi.fn().mockResolvedValue({}),
  createOAuth2Session: vi.fn().mockResolvedValue({}),
  create: vi.fn().mockResolvedValue({})
};

export const mockTablesDB = {
  listRows: vi.fn().mockResolvedValue({ total: 0, rows: [] }),
  getRow: vi.fn().mockResolvedValue({}),
  createRow: vi.fn().mockResolvedValue({}),
  updateRow: vi.fn().mockResolvedValue({}),
  deleteRow: vi.fn().mockResolvedValue({})
};

export const mockFunctions = {
  createExecution: vi.fn().mockResolvedValue({ status: 'completed', responseBody: '{}' })
};

export const mockRealtime = {
  subscribe: vi.fn().mockResolvedValue({ 
    close: vi.fn().mockResolvedValue(undefined),
    unsubscribe: vi.fn() 
  })
};

export const mockClient = {
  setEndpoint: vi.fn().mockReturnThis(),
  setProject: vi.fn().mockReturnThis()
};

vi.mock('~/api/appwriteClient', () => ({
  account: mockAccount,
  tablesDB: mockTablesDB,
  functions: mockFunctions,
  realtime: mockRealtime,
  client: mockClient,
  ID: {
    unique: () => 'unique-id'
  }
}));

// Default mock game
const defaultMockGame = {
  $id: 'test-id',
  status: 'IN_PROGRESS',
  xPlayerId: 'user-123',
  oPlayerId: 'user-456',
  moveHistory: ['E4'],
  board: '.'.repeat(81),
  tileWinners: '.'.repeat(9),
  analysisStatus: 'NOT_ANALYZED',
  isOnDevice: false,
  requestedOpponentId: null
};

// Mock games and users
export const mockGames = {
  getGame: vi.fn().mockResolvedValue(defaultMockGame),
  listGames: vi.fn().mockResolvedValue([]),
  createGame: vi.fn().mockResolvedValue('new-game-id'),
  joinGame: vi.fn().mockResolvedValue(true),
  submitMove: vi.fn().mockResolvedValue({ success: true }),
  abandonGame: vi.fn().mockResolvedValue({ success: true }),
  cancelGame: vi.fn().mockResolvedValue({ success: true }),
  analyzeGame: vi.fn().mockResolvedValue(true)
};

vi.mock('~/api/games', () => ({
  games: mockGames
}));

export const mockUsers = {
  getUser: vi.fn().mockResolvedValue({ $id: 'user-123', name: 'Test User' })
};

vi.mock('~/api/users', () => ({
  users: mockUsers
}));

// Mock Nuxt runtime config
vi.mock('#app', async (importOriginal) => {
  const actual = await importOriginal<typeof import('#app')>()
  return {
    ...actual,
    useRuntimeConfig: () => ({
      public: {
        appwriteEndpoint: 'https://api.tixo-game.com/v1',
        appwriteProjectId: 'tixo'
      }
    }),
    useRoute: () => ({
      params: { id: 'test-id' },
      path: '/game/test-id',
      fullPath: '/game/test-id'
    }),
    useRouter: () => ({
      push: vi.fn().mockResolvedValue(undefined),
      replace: vi.fn().mockResolvedValue(undefined)
    })
  }
});

beforeEach(() => {
  setActivePinia(createPinia());
  vi.useFakeTimers();
});

afterEach(() => {
  vi.clearAllMocks();
  vi.useRealTimers();
});
