import type { ScheduleDay } from "../domain/types";

export const schedule: ScheduleDay[] = [
    { day: "Lunes", open: null, close: null },
    { day: "Martes", open: null, close: null },
    { day: "Miércoles", open: null, close: null },
    { day: "Jueves", open: null, close: null },
    { day: "Viernes", open: null, close: null },
    { day: "Sábado", open: null, close: null },
    { day: "Domingo", open: "7:00 a. m.", close: "1:00 p. m." }
];

export const isOpenNow = () => {
    const now = new Date();
    const currentDayIndex = (now.getDay() + 6) % 7; // Ajusta para que Domingo sea el último elemento
    const currentDay = schedule[currentDayIndex];
    if (!currentDay || !currentDay.open) return false;
    return true; // Puedes mejorar verificando hora exacta
};
