import { vi } from 'vitest'

// Mock localStorage for Appwrite SDK
if (typeof window !== 'undefined') {
  const localStorageMock = (function() {
    let store: Record<string, string> = {};
    return {
      getItem: function(key: string) { return store[key] || null; },
      setItem: function(key: string, value: string) { store[key] = value.toString(); },
      clear: function() { store = {}; },
      removeItem: function(key: string) { delete store[key]; }
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
}

export const mockUser = {
  $id: 'user-123',
  name: 'Test User',
  email: 'test@example.com',
  registration: '',
  status: true,
  passwordUpdate: '',
  emailVerification: true,
  phoneVerification: false,
  prefs: {},
  accessedAt: ''
}

export const mockAccount = {
  get: vi.fn().mockResolvedValue(mockUser),
  createEmailPasswordSession: vi.fn().mockResolvedValue({}),
  createAnonymousSession: vi.fn().mockResolvedValue({}),
  deleteSession: vi.fn().mockResolvedValue({}),
  createOAuth2Session: vi.fn().mockResolvedValue({}),
  create: vi.fn().mockResolvedValue({})
}

export const mockTablesDB = {
  listRows: vi.fn().mockResolvedValue({ total: 0, rows: [] }),
  getRow: vi.fn().mockResolvedValue({}),
  createRow: vi.fn().mockResolvedValue({}),
  updateRow: vi.fn().mockResolvedValue({}),
  deleteRow: vi.fn().mockResolvedValue({}),
  listDocuments: vi.fn().mockResolvedValue({ total: 0, documents: [] }),
  getDocument: vi.fn().mockResolvedValue({}),
  createDocument: vi.fn().mockResolvedValue({}),
  updateDocument: vi.fn().mockResolvedValue({}),
  deleteDocument: vi.fn().mockResolvedValue({})
}

export const mockFunctions = {
  createExecution: vi.fn().mockResolvedValue({ status: 'completed', responseBody: '{}' })
}

export const mockRealtime = {
  subscribe: vi.fn().mockReturnValue({ unsubscribe: vi.fn() })
}

// Ensure the mock is exported so it can be used in spec files
export const appwriteMock = {
  account: mockAccount,
  tablesDB: mockTablesDB,
  functions: mockFunctions,
  realtime: mockRealtime,
  client: {
    setEndpoint: vi.fn().mockReturnThis(),
    setProject: vi.fn().mockReturnThis()
  },
  ID: {
    unique: () => 'unique-id'
  }
}

export function setupGuest() {
  mockAccount.get.mockRejectedValue(new Error('Unauthorized'))
}

export function setupAuthenticated(user = mockUser) {
  mockAccount.get.mockResolvedValue(user)
}
