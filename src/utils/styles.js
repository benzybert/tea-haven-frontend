// Common class combinations for consistent styling
export const STYLES = {
  // Layout styles
  container: 'container mx-auto px-4',
  section: 'py-12 px-4 sm:px-6 lg:px-8',
  
  // Form styles
  formControl: 'mt-1 block w-full',
  input: `
    appearance-none relative block w-full px-3 py-2
    border border-gray-300 rounded-md
    placeholder-gray-500 text-gray-900
    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
    sm:text-sm
  `,
  label: 'block text-sm font-medium text-gray-700',
  
  // Button variants
  button: {
    base: `
      inline-flex justify-center py-2 px-4
      border rounded-md shadow-sm text-sm font-medium
      focus:outline-none focus:ring-2 focus:ring-offset-2
    `,
    primary: `
      bg-indigo-600 text-white border-transparent
      hover:bg-indigo-700 focus:ring-indigo-500
    `,
    secondary: `
      bg-white text-gray-700 border-gray-300
      hover:bg-gray-50 focus:ring-indigo-500
    `,
    danger: `
      bg-red-600 text-white border-transparent
      hover:bg-red-700 focus:ring-red-500
    `
  },
  
  // Card styles
  card: {
    container: 'bg-white shadow rounded-lg overflow-hidden',
    header: 'px-4 py-5 border-b border-gray-200 sm:px-6',
    body: 'px-4 py-5 sm:p-6',
    footer: 'px-4 py-4 sm:px-6 bg-gray-50'
  },
  
  // Text styles
  text: {
    heading: 'text-2xl font-bold text-gray-900',
    subheading: 'text-lg font-medium text-gray-900',
    body: 'text-base text-gray-500',
    small: 'text-sm text-gray-500'
  },
  
  // Link styles
  link: {
    default: 'text-indigo-600 hover:text-indigo-500',
    nav: 'text-gray-500 hover:text-gray-900',
    button: 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md'
  },
  
  // Grid styles
  grid: {
    container: 'grid gap-6',
    cols1: 'grid-cols-1',
    cols2: 'sm:grid-cols-2',
    cols3: 'lg:grid-cols-3',
    cols4: 'xl:grid-cols-4'
  },
  
  // Flex styles
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    col: 'flex flex-col'
  },
  
  // Spacing
  spacing: {
    section: 'space-y-8',
    form: 'space-y-6',
    stack: 'space-y-4'
  }
};

// Combine multiple style strings
export const combineStyles = (...styles) => {
  return styles.filter(Boolean).join(' ');
};

// Get button style based on variant
export const getButtonStyle = (variant = 'primary', additionalClasses = '') => {
  return combineStyles(
    STYLES.button.base,
    STYLES.button[variant],
    additionalClasses
  );
};

// Get responsive grid classes
export const getGridClasses = (cols = 1) => {
  return combineStyles(
    STYLES.grid.container,
    STYLES.grid.cols1,
    cols >= 2 && STYLES.grid.cols2,
    cols >= 3 && STYLES.grid.cols3,
    cols >= 4 && STYLES.grid.cols4
  );
}; 