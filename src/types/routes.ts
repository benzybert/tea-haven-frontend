interface RouteConfig {
  path: string;
  element: React.ReactNode;
  layout?: 'default' | 'auth' | 'form';
} 