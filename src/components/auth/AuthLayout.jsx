import PageLayout from '../common/PageLayout';

const AuthLayout = ({ children, title, subtitle, subtitleLink }) => {
    return (
      <PageLayout title={title} subtitle={subtitle} subtitleLink={subtitleLink}>
        {children}
      </PageLayout>
    );
};

export default AuthLayout; 