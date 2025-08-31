export interface SeatingArrangements {
  id: number; // ID билета
  fare: number; // Стоимость билета
  isRegistered: boolean; // Зарегистрирован (посадка выполнена)
  isSold: boolean; // Продан
  isBooked: boolean; // Забронирован
  flightId: number; // ID рейса
  seat: {
    // Место в самолете
    id: number; // ID места
    seatNumber: string; // Номер места (например, "12A")
    isNearEmergencyExit: boolean; // Рядом с аварийным выходом
    isLockedBack: boolean; // Откидывается назад
    category: string; // Класс: ПЕРВЫЙ (First Class)
    aircraftId: number; // ID самолета
  };
}
