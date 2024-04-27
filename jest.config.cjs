module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/tests'],
	testEnvironment: 'jsdom',
	testMatch: ['**/*.tests.tsx'],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "<rootDir>/.tests/styleMock.js",
		"\\.(gif|png|ttf|eot|svg)$": "<rootDir>/.tests/fileMock.js",
    '^@components(.*)': '<rootDir>/src/components$1',
    '^@context(.*)': '<rootDir>/src/context$1',
    '^@enums(.*)': '<rootDir>/src/enums$1',
    '^@styles(.*)': '<rootDir>/src/styles/themes/default.ts$1',
    '^@utils(.*)': '<rootDir>/src/utils$1'
	}
};
