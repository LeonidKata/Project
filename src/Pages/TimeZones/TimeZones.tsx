import { useState } from 'react';

import { useGetTimeZonesQuery } from '../../App/store/rootApi';
import { TimezoneTable } from '../../Entities/timezone/ui/TimezoneTable';
import { AddTimezoneButton } from '../../features/add-timezone/ui/addTimezoneButton';

export const TimeZones = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetTimeZonesQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="flex justify-between">
        <h2>Часовые пояса</h2>
        <AddTimezoneButton />
      </div>
      <TimezoneTable
        data={data.content || []}
        pagination={{
          current: page,
          pageSize: 10,
          total: data?.totalElements,
          onChange: (newPage) => setPage(newPage),
        }}
      />
    </div>
  );
};
