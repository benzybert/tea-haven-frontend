/**
 * Single Responsibility: Renders a responsive grid of tea products with consistent spacing
 * and handles empty state display when no items are present.
 */
import TeaProductCard from '../features/TeaProductCard';

const TeaGrid = ({ items }) => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {items.map(tea => (
        <TeaProductCard
          key={tea._id}
          {...tea}
        />
      ))}
    </div>

    {items.length === 0 && (
      <div className="text-center text-gray-600 py-12">
        No teas found in this category.
      </div>
    )}
  </>
);

export default TeaGrid; 