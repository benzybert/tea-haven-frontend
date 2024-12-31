import TeaProductCard from '../features/TeaProductCard';

const TeaGrid = ({ 
  items, 
  emptyMessage = "No teas found in this category.",
  columns = {
    md: 2,
    lg: 3,
    xl: 4
  }
}) => (
  <>
    <div className={`grid md:grid-cols-${columns.md} lg:grid-cols-${columns.lg} xl:grid-cols-${columns.xl} gap-8`}>
      {items.map(tea => (
        <TeaProductCard
          key={tea._id || tea.id}
          {...tea}
        />
      ))}
    </div>

    {items.length === 0 && (
      <div className="text-center text-gray-600 py-12">
        {emptyMessage}
      </div>
    )}
  </>
);

export default TeaGrid; 