import { AircraftsTable, planes } from '../../features/aircrafts';

export const AirCraftsPage = () => {
  return (
    <>
      <AircraftsTable data={planes} />
    </>
  );
};
