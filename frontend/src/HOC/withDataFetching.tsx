import React from 'react';
import Loader from 'components/Loader';

interface WithDataFetchingProps {
  loading: boolean;
  error: boolean;
}

const WithDataFetching = <Props extends object>(
  dataName: string,
  fetchFunction: (props: Props) => any,
  shouldCallEffect: (props: Props) => any[],
) => (BaseComponent: React.ComponentType<Props>) => (props: Props) => {
  let loading = true;
  let error = false;
  try {
    const response = fetchFunction(props);
    // console.log(response);
    console.log(props);
    loading = false;
  } catch {
    loading = false;
    error = true;
  }
  console.log(error);
  return (
    (loading && <Loader />) ||
    (error && <p>Une erreur est survenue</p>) || <BaseComponent {...props} />
  );
};

export default WithDataFetching;
