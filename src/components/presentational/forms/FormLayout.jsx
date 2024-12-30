// src/components/common/forms/FormLayout.jsx
const FormLayout = ({ title, subtitle, subtitleLink, children }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-center text-sm text-gray-600">
              {subtitle} {subtitleLink}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
 