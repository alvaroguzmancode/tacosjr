import type { ScheduleDay } from "../domain/types";

export const schedule: ScheduleDay[] = [
    { day: "Lunes", open: "7:00 a. m.", close: "2:00 p. m." },
    { day: "Martes", open: "7:00 a. m.", close: "2:00 p. m." },
    { day: "Miércoles", open: "7:00 a. m.", close: "2:00 p. m." },
    { day: "Jueves", open: "7:00 a. m.", close: "2:00 p. m." },
    { day: "Viernes", open: "7:00 a. m.", close: "2:00 p. m." },
    { day: "Sábado", open: "7:00 a. m.", close: "12:30 p. m." },
    { day: "Domingo", open: null, close: null }
];

export const isOpenNow = () => {
    const now = new Date();
    const currentDay = schedule[now.getDay() - 1]; // Domingo=0
    if (!currentDay || !currentDay.open) return false;
    return true; // Puedes mejorar verificando hora exacta
};
