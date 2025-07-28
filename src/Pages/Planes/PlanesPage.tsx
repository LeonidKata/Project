import { PlanesTable, planes } from '../../features/planes';

export const PlanesPage = () => {
  return (
    <div>
      <PlanesTable data={planes}/>
    </div>
  );
};
