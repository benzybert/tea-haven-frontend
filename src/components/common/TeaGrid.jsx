import TeaProductCard from '../features/TeaProductCard';

const TeaGrid = ({ items }) => (
  <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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