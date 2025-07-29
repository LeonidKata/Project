import { AirCraftsTable, planes } from '../../features/planes';

export const AirCraftsPage = () => {
  return (
    <>
      <AirCraftsTable data={planes} />
    </>
  );
};
