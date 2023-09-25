const DB_REGEXP = '*.DB';
const EXCLUDE_NAMES_NAMING_CONVENTION = [
  'photoURL',
  'companyVAT',
  'serviceProviderVAT',
  'customerVAT',
  'heroBIOText',
  'pauseDurationMS',
  'generalPauseDurationMS',
  'downloadURL',
  'databaseURL',
];
const excludeNamesNamingConventionRegex =
  EXCLUDE_NAMES_NAMING_CONVENTION.join('|');

const underscoreAndExcludeNamingConventionRegex = `^(_|${excludeNamesNamingConventionRegex})`;

const initialRules = {
  'eslint-comments/require-description': [
    'warn',
    { ignore: ['eslint-enable'] },
  ], // we don't need to comment why we used "eslint-enable"
  'quote-props': ['error', 'consistent-as-needed'],
  quotes: ['error', 'single', { avoidEscape: true }],
  'arrow-parens': ['error', 'always'],
  curly: ['error', 'all'],
  'prefer-destructuring': 'error',
  'default-case': 'error',
  'func-names': ['error', 'always', { generators: 'never' }],
  'typescript-sort-keys/interface': [
    'error',
    'asc',
    { caseSensitive: false, natural: false, requiredFirst: true },
  ],
  'no-void': ['error', { allowAsStatement: true }], // we allow to use "void" to mark promises we don't wait for
  'no-unused-expressions': ['error'], // we prefer to use callFunction?.() instead of callFunction && callFunction()
  'no-empty-function': [
    'error',
    {
      allow: ['constructors'],
    },
  ],
  'no-dupe-keys': 'error',
  'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
  'no-underscore-dangle': ['off'], // we regulate an use of an underscore by other rules
  'no-plusplus': 'off', // It's okay to use ++ operator
  'no-magic-numbers': [
    'error',
    {
      ignore: [-1, 0, 1],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
    },
  ],
  'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
};

const tsRules = {
  '@typescript-eslint/no-shadow': 'error', // Vars with the same name in different scopes are not allowed
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
  ], // Ignore variables with "_" prefix
  '@typescript-eslint/no-unused-expressions': ['error'],
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      variables: false, // we should disable this since we use all "styles" vars before their definition
    },
  ],
  '@typescript-eslint/no-inferrable-types': 'off', // we should always set types, even if they are trivial (number, boolean, etc)
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
};

const spellCheckerRule = {
  '@cspell/spellchecker': [
    'error',
    {
      checkComments: true,
    },
  ],
};

const importSortOrderRule = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^(@?\\w|\\w)'], // libs
        ['^(api|assets|components|constants|modules|utilities|hooks)\\.*'], // ts-aliases, need update manually
        ['^\\.\\./'], // parent folder imports
        ['^\\./'], // relative folder imports
      ],
    },
  ],
};

const importRules = {
  'no-duplicate-imports': 'error', // imports from the same source must be in one record
  'import/no-cycle': ['error', { maxDepth: '∞' }],
  'import/prefer-default-export': 'off', // we use only named exports in the project
  'import/extensions': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: ['**/scripts/**/*.ts'] },
  ],
  ...importSortOrderRule,
};

const reactRules = {
  'react/react-in-jsx-scope': 'off',
  'react/jsx-uses-react': 'off',
  'react/display-name': 'off',
  'react/prop-types': 'off',
  'react-hooks/exhaustive-deps': 'warn',
  'react/style-prop-object': 'off', // we allow to use string as prop
  'react/require-default-props': 'off',
  'react/jsx-props-no-spreading': 'warn',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
    },
  ],
};

const reactNativeRules = {
  'react-native/no-inline-styles': 'warn', // All react-native styles must be move out to a styles object
  'react-native/split-platform-components': 'error',
  'react-native/no-single-element-style-arrays': 'error',
};

const paddingRules = {
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'return',
        'if',
        'export',
        'function',
        'while',
        'try',
        'throw',
        'class',
      ],
    },
    {
      blankLine: 'always',
      prev: ['if', 'function', 'while', 'export', 'throw', 'class'],
      next: '*',
    },
    { blankLine: 'any', prev: 'const', next: ['const', 'let'] },
    { blankLine: 'always', prev: 'const', next: '*' },
    { blankLine: 'any', prev: 'const', next: 'const' },
    {
      blankLine: 'always',
      prev: 'multiline-const',
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'multiline-const',
    },
  ],
};

const namingConventionRule = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase'],
      filter: {
        match: false,
        regex: `(\b${DB_REGEXP}|^(_|${excludeNamesNamingConventionRegex}))`,
      },
    },
    {
      selector: 'variable',
      modifiers: ['global'],
      types: ['number', 'string'],
      format: ['UPPER_CASE'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'variable',
      modifiers: ['exported'],
      format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'variable',
      types: ['function'],
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'function',
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'property',
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'enum',
      format: ['StrictPascalCase'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'enumMember',
      format: ['UPPER_CASE'],
    },
    {
      selector: 'parameter',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['StrictPascalCase'],
      prefix: [
        'is',
        'are',
        'has',
        'show',
        'with',
        'use',
        'no',
        'newIs',
        'initialIs',
        'can',
        'should',
      ],
    },
    {
      selector: 'interface',
      format: ['StrictPascalCase'],
      filter: {
        match: false,
        regex: underscoreAndExcludeNamingConventionRegex,
      },
    },
    {
      selector: 'typeLike',
      format: ['StrictPascalCase'],
      filter: {
        match: false,
        regex: `\b${DB_REGEXP}`,
      },
    },
  ],
};

const override = {
  tsFilesOnlyWithExports: {
    files: ['**/index.ts', '**/constants.ts'],
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'any', prev: 'export', next: 'export' },
      ],
    },
  },
  js: {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  namingConventionExceptions: {
    files: ['src/configs/*.ts', 'scripts/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
};

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:eslint-comments/recommended',
    'plugin:@cspell/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2023,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'simple-import-sort',
    'typescript-sort-keys',
    'react',
    'react-native',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    '.prettierrc.js',
    'babel.config.js',
    'metro.config.js',
    'rn-cli.config.js',
  ],
  rules: {
    ...initialRules,
    ...tsRules,
    ...reactRules,
    ...reactNativeRules,
    ...spellCheckerRule,
    ...importRules,
    ...paddingRules,
    ...namingConventionRule,
  },
  overrides: [
    override.tsFilesOnlyWithExports,
    override.js,
    override.namingConventionExceptions,
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
