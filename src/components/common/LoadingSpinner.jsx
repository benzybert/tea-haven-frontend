/**
 * Single Responsibility: Provides a consistent loading indicator across the application,
 * displaying a centered spinning animation during data fetching or processing states.
 */
const LoadingSpinner = ({ size = 12, color = 'green-500', fullScreen = true }) => (
  <div className={`flex justify-center items-center ${fullScreen ? 'min-h-screen' : ''}`}>
    <div className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}></div>
  </div>
);

export default LoadingSpinner;