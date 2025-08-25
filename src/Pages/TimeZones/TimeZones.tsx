import { testData } from '../../entities/timezone/model/mock-data';
import { TimezoneTable } from '../../entities/timezone/ui/TimezoneTable';
import { AddTimezoneButton } from '../../features/add-timezone/ui/addTimezoneButton';

export const TimeZones = () => {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="flex justify-between">
        <h2>Часовые пояса</h2>
        <AddTimezoneButton />
      </div>
      <TimezoneTable data={testData} />
    </div>
  );
};
