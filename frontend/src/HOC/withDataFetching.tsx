import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import { PageContainer } from 'pages/Home/Home.style';

interface WithDataFetchingProps {
  loading: boolean;
  error: boolean;
}

const WithDataFetching = <Props extends object>(
  dataName: string,
  fetchFunction: (props: Props) => any,
  shouldCallEffect: (props: Props) => any[],
) => (BaseComponent: React.ComponentType<Props>) => (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>({});

  async function updateState() {
    try {
      setLoading(true);
      const response = await fetchFunction(props);
      setData(response.body);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    updateState();
  }, shouldCallEffect(props));

  const customProps = { [dataName]: data };

  return (
    <PageContainer>
      {(loading && <Loader />) || (error && <p>Une erreur est survenue</p>) || (
        <BaseComponent {...props} {...customProps} />
      )}
    </PageContainer>
  );
};

export default WithDataFetching;
